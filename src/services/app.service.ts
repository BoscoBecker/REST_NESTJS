import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../connection/firebird.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getProdutos(): Promise<any> {
    let firebirdService = new FirebirdService();
    try {
      return await firebirdService.executeQuery('select * from produto');
    } catch (error) {
      console.error(`Error executing query: ${error.message}`);
    }
  }  

  async getProdutoByID(id: string): Promise<any>{
    try {
      let firebirdService =  new FirebirdService();
      return await firebirdService.executeQuery('select * from produto where id = '+id);
      
    } catch (error) {
      console.error(`Error executing query: ${error.message}`);      
    }


  }

  async getProdutosqtde(): Promise<any> {
    let firebirdService = new FirebirdService();
    try {
      return await firebirdService.executeQuery('select * from produto_qtde');      
    } catch (error) {
      console.error(`Error executing query: ${error.message}`);
      
    }
  }
}
