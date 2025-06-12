import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from "@nestjs/common";
import axios, { AxiosError, AxiosInstance } from "axios";
import { Localization } from "@prisma/client";
import { ILocation, IRoute, ReverseResponse } from "../typing/location";
import { CacheService } from "../cache/cache.service";

@Injectable()
export class LocationService implements OnModuleInit {
  private http: AxiosInstance;
  private logger = new Logger(LocationService.name);

  constructor(private cache: CacheService) {
    this.http = axios.create({
      baseURL: process.env.LOCATION_HOST,

      params: {
        key: process.env.LOCATION_KEY,
      },
    });
  }

  onModuleInit() {
    ["LOCATION_HOST", "LOCATION_KEY"].forEach((env) => {
      if (!process.env[env]) {
        throw new Error(`Variável de ambiente ${env} não definida`);
      }
    });
  }

  async reverse(
    city: string,
    state: string,
    address: string,
    number: string,
    zipCode: string,
  ): Promise<{ latitude: number; longitude: number }> {
    const query = `${number} ${address}, ${city}, ${state}, ${zipCode}`;
    const data = await this.cache.getValue(`reverse:${query}`);

    if (data)
      return JSON.parse(data) as { latitude: number; longitude: number };

    const response = await this.http
      .get<Array<ReverseResponse>>("/search", {
        params: {
          q: query,
          format: "json",
        },
      })
      .then((res) => res.data)
      .catch((e: AxiosError) => {
        this.logger.error(e?.response?.data || e.message);
        throw new NotFoundException("Erro ao buscar localização");
      });

    const geoCode = {
      latitude: +response[0].lat,
      longitude: +response[0].lon,
    };

    await this.cache.setCache(query, JSON.stringify(geoCode));
    return geoCode;
  }

  async findDistance(
    origin: Localization,
    destination: Localization,
  ): Promise<IRoute> {
    const coordenates = encodeURIComponent(
      `${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}`,
    );

    const location = await this.http
      .get<ILocation>(`/directions/driving/` + coordenates)
      .then((res) => res.data)
      .catch((e: AxiosError) => {
        this.logger.error(e);

        throw new NotFoundException("Erro ao calcular a rota");
      });

    return {
      distance: +location.routes[0].distance / 1000,
      duration: Math.floor(location.routes[0].duration / 60), // Convert to minutes
      geometry: location.routes[0].geometry,
    };
  }
}
