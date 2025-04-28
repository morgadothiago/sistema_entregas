import {
  Controller,
  HttpCode,
  HttpStatus,
  Patch,
  UseGuards,
} from "@nestjs/common";
import { Get, Body } from "@nestjs/common";
import { ProfitService } from "./profit.service";
import { ApiTags } from "@nestjs/swagger";
import { UpdateProfitDto } from "./dto/update-profit.dto";
import { AdminGuard } from "../admin/admin.guard";

@Controller("profit")
@ApiTags("Profit")
export class ProfitController {
  constructor(private profitService: ProfitService) {}

  @Get("")
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async getProfit() {
    return this.profitService.findOne(); // Example response
  }

  @Patch("")
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AdminGuard)
  async updateProfit(@Body() updateData: UpdateProfitDto) {
    return this.profitService.update(updateData);
  }
}
