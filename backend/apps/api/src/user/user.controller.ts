import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AdminGuard } from "../admin/admin.guard";
import { UserService } from "./user.service";
import { IUserQueryParams } from "./dto/filter";
import { ApiTags } from "@nestjs/swagger";

@Controller("users")
@ApiTags("Users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async paginate(@Query() filters: IUserQueryParams) {
    return this.userService.paginate(
      filters,
      +(filters.page || 1),
      +(filters.limit || 100),
    );
  }

  @Get(":id")
  @UseGuards(AdminGuard)
  async findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }
}
