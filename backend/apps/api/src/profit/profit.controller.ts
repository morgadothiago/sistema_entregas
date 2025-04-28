import { Controller, HttpCode, HttpStatus, Patch } from "@nestjs/common";
import { Get, Body } from "@nestjs/common";
import { ProfitService } from "./profit.service";
import { ApiTags } from "@nestjs/swagger";
import { UpdateProfitDto } from "./dto/update-profit.dto";

@Controller("profit")
@ApiTags("Profit")
export class ProfitController {
  constructor(private profitService: ProfitService) {}

  @Get("")
  @HttpCode(HttpStatus.OK)
  async getProfit() {
    return this.profitService.findOne(); // Example response
  }

  @Patch("")
  @HttpCode(HttpStatus.OK)
  async updateProfit(@Body() updateData: UpdateProfitDto) {
    return this.profitService.update(updateData);
  }
}
