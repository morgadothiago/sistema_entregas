import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { Localization } from "generated/prisma";
import { ILocation, ReverseResponse } from "../typing/location";

@Injectable()
export class LocationService implements OnModuleInit {
  private http: AxiosInstance;
  private logger = new Logger(LocationService.name);

  constructor() {
    this.http = axios.create({
      baseURL: process.env.LOCATION_HOST,

      params: {
        key: process.env.LOCATION_KEY,
        format: "json",
        overview: false, // Desativa a geometria detalhada da rota (mais rápido)
        steps: false, // Remove passos detalhados (instruções de viagem)
        annotations: false, // Desativa dados extras como velocidade por trecho
        geometries: "none", // Ignora a codificação da rota (polyline)
        alternatives: false, // Evita calcular rotas alternativas
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
  ) {
    const response = await this.http
      .get<Array<ReverseResponse>>("/search", {
        params: {
          q: `${number}, ${address}, ${city}, ${state}, ${zipCode}, Brasil`,
        },
      })
      .then((res) => res.data)
      .catch((e) => {
        this.logger.error(e?.response?.data || e.message);
      });

    return {
      latitude: +(response?.[0]?.lat || 0),
      longitude: +(response?.[0]?.lon || 0),
    };
  }

  async findDistance(
    origin: Localization,
    destination: Localization,
  ): Promise<
    Array<{
      distance: number;
      duration: number;
    }>
  > {
    const location = await this.http
      .get<ILocation>(
        `/directions/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}`,
        {
          params: {
            steps: true,
            alternatives: true,
          },
        },
      )
      .then((res) => {
        console.log(res.data);

        return res.data;
      })
      .catch(() => {
        throw new Error("Erro ao calcular a rota");
      });

    return location.routes.map((route) => {
      return {
        distance: route.distance,
        duration: route.duration,
      };
    });
  }
}
