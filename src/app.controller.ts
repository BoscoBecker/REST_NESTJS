import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('produtos')
  async GetProdutos(): Promise<any>{
    return await this.appService.getProdutos();
  }
  @Get('produtoqtde')
  async GetProdutosqtde(): Promise<any>{
    return await this.appService.getProdutosqtde();
  }
}
