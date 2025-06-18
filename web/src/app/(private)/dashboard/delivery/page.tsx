"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Package,
  Plus,
  Edit,
  Trash2,
  Save,
  Clock,
  Car,
  Settings,
  Calculator,
  Sparkles,
} from "lucide-react";
import { DashboardTabs } from "@/app/components/DashboardTabs";

interface DeliveryConfig {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  pricePerKm: number;
  minPrice: number;
  maxPrice: number;
  estimatedTime: number;
  vehicleType: string;
  isActive: boolean;
  zones: DeliveryZone[];
}

interface DeliveryZone {
  id: string;
  name: string;
  multiplier: number;
  isActive: boolean;
}

// Função auxiliar para calcular preço
function calculatePrice(
  config: DeliveryConfig,
  distance: number,
  zoneMultiplier: number = 1.0
) {
  const basePrice = config.basePrice;
  const distancePrice = distance * config.pricePerKm;
  const totalPrice = (basePrice + distancePrice) * zoneMultiplier;

  return Math.max(config.minPrice, Math.min(config.maxPrice, totalPrice));
}

export default function DeliveryConfigPage() {
  const [deliveryConfigs, setDeliveryConfigs] = useState<DeliveryConfig[]>([
    {
      id: "1",
      name: "Entrega Padrão",
      description: "Entrega em até 2 horas",
      basePrice: 15.0,
      pricePerKm: 2.5,
      minPrice: 12.0,
      maxPrice: 50.0,
      estimatedTime: 120,
      vehicleType: "moto",
      isActive: true,
      zones: [
        { id: "1", name: "Zona Central", multiplier: 1.0, isActive: true },
        { id: "2", name: "Zona Norte", multiplier: 1.2, isActive: true },
        { id: "3", name: "Zona Sul", multiplier: 1.1, isActive: true },
      ],
    },
  ]);

  const [selectedConfig, setSelectedConfig] = useState<DeliveryConfig | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const vehicleTypes = [
    { value: "moto", label: "Moto", icon: "🏍️" },
    { value: "carro", label: "Carro", icon: "🚗" },
    { value: "bicicleta", label: "Bicicleta", icon: "🚲" },
    { value: "van", label: "Van", icon: "🚐" },
  ];

  const handleSaveConfig = (config: DeliveryConfig) => {
    if (selectedConfig) {
      setDeliveryConfigs((prev) =>
        prev.map((c) => (c.id === selectedConfig.id ? config : c))
      );
    } else {
      const newConfig = { ...config, id: Date.now().toString() };
      setDeliveryConfigs((prev) => [...prev, newConfig]);
    }
    setIsDialogOpen(false);
    setSelectedConfig(null);
  };

  const handleDeleteConfig = (id: string) => {
    setDeliveryConfigs((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      {/* Header com gradiente usando cores da aplicação */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-[#003B73] via-[#00449a] to-[#5DADE2] rounded-3xl p-4 sm:p-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h1 className="font-bold text-[clamp(1.3rem,4vw,2.5rem)] bg-gradient-to-r from-white to-[#00FFB3] bg-clip-text text-transparent leading-tight">
                  Configuração de Entregas
                </h1>
              </div>
              <p className="text-blue-100 text-xs sm:text-base max-w-2xl leading-snug">
                Gerencie tipos de entrega e configure preços dinâmicos com nossa
                ferramenta inteligente
              </p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => setSelectedConfig(null)}
                  className="w-full sm:w-auto bg-[#00FFB3] hover:bg-[#00E6A3] text-[#003B73] border-0 font-bold transition-all duration-300 hover:scale-105 shadow-lg text-[clamp(1rem,2.5vw,1.2rem)] px-4 py-2 rounded-2xl"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Nova Configuração
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-2xl p-2 sm:p-6 bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-lg sm:text-2xl bg-gradient-to-r from-[#003B73] to-[#5DADE2] bg-clip-text text-transparent">
                    {selectedConfig
                      ? "Editar Configuração"
                      : "Nova Configuração"}
                  </DialogTitle>
                  <DialogDescription className="text-xs sm:text-base text-gray-600">
                    Configure os parâmetros de entrega e preços dinâmicos
                  </DialogDescription>
                </DialogHeader>
                <DeliveryConfigForm
                  config={selectedConfig}
                  onSave={handleSaveConfig}
                  onCancel={() => setIsDialogOpen(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <DashboardTabs
        options={[
          {
            value: "configs",
            label: "Configurações",
            icon: <Settings className="w-5 h-5" />,
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {deliveryConfigs.map((config, index) => (
                  <Card
                    key={config.id}
                    className="group hover:shadow-2xl transition-all duration-500 rounded-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden transform hover:-translate-y-2 shadow-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Header com gradiente usando cores da aplicação */}
                    <div className="bg-gradient-to-r from-[#003B73] via-[#00449a] to-[#5DADE2] p-4 sm:p-6 text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                              <Package className="w-6 h-6 text-white" />
                            </div>
                            <div className="min-w-0">
                              <CardTitle className="text-[clamp(1rem,3vw,1.3rem)] font-bold truncate max-w-[120px] sm:max-w-xs">
                                {config.name}
                              </CardTitle>
                              <CardDescription className="text-blue-100 text-xs sm:text-sm truncate max-w-[120px] sm:max-w-xs">
                                {config.description}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge
                            variant={config.isActive ? "default" : "secondary"}
                            className={`text-xs px-3 py-1 rounded-full ${
                              config.isActive
                                ? "bg-[#00FFB3]/20 text-[#003B73] border-[#00FFB3]/30 font-semibold"
                                : "bg-gray-500/20 text-gray-100 border-gray-400/30"
                            }`}
                          >
                            {config.isActive ? "Ativo" : "Inativo"}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6 space-y-6">
                      {/* Preços com design moderno */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-gradient-to-br from-[#00FFB3]/10 to-[#00E6A3]/20 p-3 sm:p-4 rounded-xl border border-[#00FFB3]/30">
                          <Label className="text-xs sm:text-sm font-semibold text-[#003B73] mb-2 block">
                            Preço Base
                          </Label>
                          <p className="text-[clamp(1.1rem,3vw,1.5rem)] font-bold text-[#00FFB3]">
                            R$ {config.basePrice.toFixed(2)}
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-[#5DADE2]/10 to-[#4A90E2]/20 p-3 sm:p-4 rounded-xl border border-[#5DADE2]/30">
                          <Label className="text-xs sm:text-sm font-semibold text-[#003B73] mb-2 block">
                            Por KM
                          </Label>
                          <p className="text-[clamp(1.1rem,3vw,1.5rem)] font-bold text-[#5DADE2]">
                            R$ {config.pricePerKm.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Limites com design elegante */}
                      <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-3 sm:p-4 rounded-xl border border-gray-200">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                          <div>
                            <Label className="text-xs sm:text-sm font-medium text-gray-600 mb-1 block">
                              Preço Mínimo
                            </Label>
                            <p className="text-[clamp(0.95rem,2.5vw,1.1rem)] font-semibold text-gray-800">
                              R$ {config.minPrice.toFixed(2)}
                            </p>
                          </div>
                          <div>
                            <Label className="text-xs sm:text-sm font-medium text-gray-600 mb-1 block">
                              Preço Máximo
                            </Label>
                            <p className="text-[clamp(0.95rem,2.5vw,1.1rem)] font-semibold text-gray-800">
                              R$ {config.maxPrice.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Informações Adicionais */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-600 gap-3">
                        <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-lg border border-orange-200">
                          <Clock className="w-4 h-4 text-orange-600" />
                          <span className="font-medium text-[clamp(0.95rem,2.5vw,1.1rem)]">
                            {config.estimatedTime} min
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg border border-purple-200">
                          <Car className="w-4 h-4 text-purple-600" />
                          <span className="font-medium text-[clamp(0.95rem,2.5vw,1.1rem)]">
                            {
                              vehicleTypes.find(
                                (v) => v.value === config.vehicleType
                              )?.label
                            }
                          </span>
                        </div>
                      </div>

                      {/* Ações com design moderno e melhor espaçamento mobile */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-gray-100">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 min-w-[120px] bg-gradient-to-r from-[#003B73] to-[#5DADE2] text-white border-0 hover:from-[#00449a] hover:to-[#4A90E2] transition-all duration-300 hover:scale-105 py-3 sm:py-2 font-semibold text-[clamp(1rem,2.5vw,1.1rem)]"
                          onClick={() => {
                            setSelectedConfig(config);
                            setIsDialogOpen(true);
                          }}
                        >
                          <Edit className="w-5 h-5 mr-2" />
                          Editar
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="flex-1 min-w-[120px] bg-gradient-to-r from-red-500 to-pink-500 border-0 hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 py-3 sm:py-2 font-semibold text-[clamp(1rem,2.5vw,1.1rem)]"
                          onClick={() => handleDeleteConfig(config.id)}
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ),
          },
          {
            value: "calculator",
            label: "Calculadora de Preços",
            icon: <Calculator className="w-5 h-5" />,
            content: <PriceCalculator configs={deliveryConfigs} />,
          },
        ]}
        defaultValue="configs"
      />
    </div>
  );
}

// Componente do Formulário de Configuração
function DeliveryConfigForm({
  config,
  onSave,
  onCancel,
}: {
  config: DeliveryConfig | null;
  onSave: (config: DeliveryConfig) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<Partial<DeliveryConfig>>(
    config || {
      name: "",
      description: "",
      basePrice: 0,
      pricePerKm: 0,
      minPrice: 0,
      maxPrice: 0,
      estimatedTime: 60,
      vehicleType: "moto",
      isActive: true,
      zones: [],
    }
  );

  const vehicleTypes = [
    { value: "moto", label: "Moto", icon: "🏍️" },
    { value: "carro", label: "Carro", icon: "🚗" },
    { value: "bicicleta", label: "Bicicleta", icon: "🚲" },
    { value: "van", label: "Van", icon: "🚐" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.basePrice && formData.pricePerKm) {
      onSave(formData as DeliveryConfig);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="text-sm font-semibold text-[#2C3E50]"
          >
            Nome da Configuração
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Entrega Padrão"
            required
            className="text-sm border-gray-300 focus:border-[#003B73] focus:ring-[#003B73] rounded-xl transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="vehicleType"
            className="text-sm font-semibold text-[#2C3E50]"
          >
            Tipo de Veículo
          </Label>
          <Select
            value={formData.vehicleType}
            onValueChange={(value) =>
              setFormData({ ...formData, vehicleType: value })
            }
          >
            <SelectTrigger className="text-sm border-gray-300 focus:border-[#003B73] focus:ring-[#003B73] rounded-xl transition-all duration-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {vehicleTypes.map((type) => (
                <SelectItem
                  key={type.value}
                  value={type.value}
                  className="text-sm"
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="description"
          className="text-sm font-semibold text-[#2C3E50]"
        >
          Descrição
        </Label>
        <Input
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Ex: Entrega em até 2 horas"
          className="text-sm border-gray-300 focus:border-[#003B73] focus:ring-[#003B73] rounded-xl transition-all duration-300"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="basePrice"
            className="text-sm font-semibold text-[#2C3E50]"
          >
            Preço Base (R$)
          </Label>
          <Input
            id="basePrice"
            type="number"
            step="0.01"
            value={formData.basePrice}
            onChange={(e) =>
              setFormData({
                ...formData,
                basePrice: parseFloat(e.target.value) || 0,
              })
            }
            required
            className="text-sm border-gray-300 focus:border-[#00FFB3] focus:ring-[#00FFB3] rounded-xl transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="pricePerKm"
            className="text-sm font-semibold text-[#2C3E50]"
          >
            Preço por KM (R$)
          </Label>
          <Input
            id="pricePerKm"
            type="number"
            step="0.01"
            value={formData.pricePerKm}
            onChange={(e) =>
              setFormData({
                ...formData,
                pricePerKm: parseFloat(e.target.value) || 0,
              })
            }
            required
            className="text-sm border-gray-300 focus:border-[#5DADE2] focus:ring-[#5DADE2] rounded-xl transition-all duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="minPrice"
            className="text-sm font-semibold text-[#2C3E50]"
          >
            Preço Mínimo (R$)
          </Label>
          <Input
            id="minPrice"
            type="number"
            step="0.01"
            value={formData.minPrice}
            onChange={(e) =>
              setFormData({
                ...formData,
                minPrice: parseFloat(e.target.value) || 0,
              })
            }
            required
            className="text-sm border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-xl transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="maxPrice"
            className="text-sm font-semibold text-[#2C3E50]"
          >
            Preço Máximo (R$)
          </Label>
          <Input
            id="maxPrice"
            type="number"
            step="0.01"
            value={formData.maxPrice}
            onChange={(e) =>
              setFormData({
                ...formData,
                maxPrice: parseFloat(e.target.value) || 0,
              })
            }
            required
            className="text-sm border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-xl transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="estimatedTime"
            className="text-sm font-semibold text-[#2C3E50]"
          >
            Tempo Estimado (min)
          </Label>
          <Input
            id="estimatedTime"
            type="number"
            value={formData.estimatedTime}
            onChange={(e) =>
              setFormData({
                ...formData,
                estimatedTime: parseInt(e.target.value) || 0,
              })
            }
            required
            className="text-sm border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl transition-all duration-300"
          />
        </div>
      </div>

      <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="w-full sm:w-auto border-gray-300 text-[#2C3E50] hover:bg-gray-50 rounded-xl transition-all duration-300 py-3 sm:py-2 font-semibold"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-[#003B73] to-[#5DADE2] hover:from-[#00449a] hover:to-[#4A90E2] text-white border-0 rounded-xl transition-all duration-300 hover:scale-105 py-3 sm:py-2 font-semibold"
        >
          <Save className="w-4 h-4 mr-2" />
          Salvar
        </Button>
      </DialogFooter>
    </form>
  );
}

// Componente Calculadora de Preços
function PriceCalculator({ configs }: { configs: DeliveryConfig[] }) {
  const [distance, setDistance] = useState(5);
  const [selectedZone, setSelectedZone] = useState("1.0");
  const [selectedConfig, setSelectedConfig] = useState<string>("");

  const zones = [
    {
      value: "1.0",
      label: "Zona Central (1.0x)",
      color: "from-[#00FFB3] to-[#00E6A3]",
    },
    {
      value: "1.1",
      label: "Zona Sul (1.1x)",
      color: "from-[#5DADE2] to-[#4A90E2]",
    },
    {
      value: "1.2",
      label: "Zona Norte (1.2x)",
      color: "from-[#003B73] to-[#00449a]",
    },
    {
      value: "1.3",
      label: "Zona Leste (1.3x)",
      color: "from-orange-500 to-red-500",
    },
  ];

  const selectedDeliveryConfig = configs.find((c) => c.id === selectedConfig);
  const calculatedPrice = selectedDeliveryConfig
    ? calculatePrice(selectedDeliveryConfig, distance, parseFloat(selectedZone))
    : 0;

  return (
    <Card className="rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#00FFB3] via-[#00E6A3] to-[#00D4A3] p-6 text-[#003B73]">
        <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl font-bold">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
            <Calculator className="w-6 h-6" />
          </div>
          Calculadora de Preços
        </CardTitle>
        <CardDescription className="text-[#003B73]/80 text-sm sm:text-base mt-2">
          Simule preços de entrega baseados na distância e zona
        </CardDescription>
      </div>

      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label
              htmlFor="config"
              className="text-sm font-semibold text-[#2C3E50]"
            >
              Tipo de Entrega
            </Label>
            <Select value={selectedConfig} onValueChange={setSelectedConfig}>
              <SelectTrigger className="text-sm border-gray-300 focus:border-[#003B73] focus:ring-[#003B73] rounded-xl transition-all duration-300">
                <SelectValue placeholder="Selecione uma configuração" />
              </SelectTrigger>
              <SelectContent>
                {configs
                  .filter((c) => c.isActive)
                  .map((config) => (
                    <SelectItem
                      key={config.id}
                      value={config.id}
                      className="text-sm"
                    >
                      {config.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="distance"
              className="text-sm font-semibold text-[#2C3E50]"
            >
              Distância (KM)
            </Label>
            <Input
              id="distance"
              type="number"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value) || 0)}
              min="0"
              step="0.1"
              className="text-sm border-gray-300 focus:border-[#00FFB3] focus:ring-[#00FFB3] rounded-xl transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="zone"
              className="text-sm font-semibold text-[#2C3E50]"
            >
              Zona de Entrega
            </Label>
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger className="text-sm border-gray-300 focus:border-[#5DADE2] focus:ring-[#5DADE2] rounded-xl transition-all duration-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {zones.map((zone) => (
                  <SelectItem
                    key={zone.value}
                    value={zone.value}
                    className="text-sm"
                  >
                    {zone.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedDeliveryConfig && (
          <div className="bg-gradient-to-br from-[#00FFB3]/10 via-[#00E6A3]/15 to-[#00D4A3]/20 p-6 rounded-2xl border border-[#00FFB3]/30 shadow-lg">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#003B73] to-[#5DADE2] bg-clip-text text-transparent">
                  R$ {calculatedPrice.toFixed(2)}
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-5 h-5 text-[#00FFB3] animate-pulse" />
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#2C3E50] font-medium">
                Preço calculado para {distance}km
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/50 p-3 rounded-xl border border-[#00FFB3]/30">
                  <span className="text-[#2C3E50] font-medium">
                    Preço Base:
                  </span>
                  <div className="font-bold text-[#00FFB3] text-lg">
                    R$ {selectedDeliveryConfig.basePrice.toFixed(2)}
                  </div>
                </div>
                <div className="bg-white/50 p-3 rounded-xl border border-[#5DADE2]/30">
                  <span className="text-[#2C3E50] font-medium">
                    Custo por KM:
                  </span>
                  <div className="font-bold text-[#5DADE2] text-lg">
                    R${" "}
                    {(distance * selectedDeliveryConfig.pricePerKm).toFixed(2)}
                  </div>
                </div>
                <div className="bg-white/50 p-3 rounded-xl border border-[#003B73]/30">
                  <span className="text-[#2C3E50] font-medium">
                    Multiplicador:
                  </span>
                  <div className="font-bold text-[#003B73] text-lg">
                    {selectedZone}x
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
