import { Injectable, OnModuleInit } from '@nestjs/common';
import { Storage } from './storage.service';
import { File } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FileStorageService implements OnModuleInit {
  static readonly storage = new Storage();
  constructor(private prisma: PrismaService) {}

  onModuleInit(): void {
    const notExists = [
      'FILE_CLOUD_NAME',
      'FILE_CLOUD_API_KEY',
      'FILE_CLOUD_SECRET',
    ].filter((key) => !process.env[key]);

    if (notExists.length) {
      // eslint-disable-next-line no-console
      console.error(
        `\n\n\n\x1b[33mEnvironment variables \x1b[31m${notExists.join(', ')}\x1b[33m not found\x1b[0m`,
      );
      process.exit();
    }
  }

  async upsert(
    newFile: Express.Multer.File,
    folder: string[],
    file?: File,
  ): Promise<Pick<File, 'id'>> {
    if (file) {
      const { id, publicId, size } = file as {
        filename: string;
        id: number;
        publicId: string;
        size: number;
      };

      await FileStorageService.storage.delete(publicId);

      const uploaded = await FileStorageService.storage.create(
        newFile,
        folder.join('/'),
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      return await this.prisma.file.update({
        where: { id },
        data: {
          mimetype: uploaded.format,
          size: size / 1024,
          publicId: uploaded.public_id,
          path: uploaded.url,
          filename: (newFile as { originalname: string }).originalname,
        },
        select: {
          id: true,
          path: true,
        },
      });
    }

    const uploaded = await FileStorageService.storage.create(
      newFile,
      folder.join('/'),
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.file.create({
      data: {
        mimetype: uploaded.format,
        size: (newFile as { size: number }).size / 1024,
        publicId: uploaded.public_id,
        path: uploaded.url,
        filename: (newFile as { originalname: string }).originalname,
      },
      select: {
        id: true,
        path: true,
      },
    });
  }
}
