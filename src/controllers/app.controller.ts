import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from '../services/app.service';

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
  @Get('produtos/:id')
  async GetProdutoByID(@Param('id',ParseIntPipe) id:number): Promise<any>{
    return await this.appService.getProdutoByID(id);
  }
  @Get('produtoqtde')
  async GetProdutosQtde(): Promise<any>{
    return await this.appService.getProdutosqtde();
  }
  @Get('produtosgrade')
  async GetprodutosGrade(): Promise<any>{
    return await this. appService.getprodutosGrade();
  }

}
