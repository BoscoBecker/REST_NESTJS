import { Injectable } from '@nestjs/common';
import { FirebirdService } from './firebird.service';

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

  async getProdutosqtde(): Promise<any> {
    let firebirdService = new FirebirdService();
    try {
      return await firebirdService.executeQuery('select * from produto_qtde');      
    } catch (error) {
      console.error(`Error executing query: ${error.message}`);
      
    }


  }
}
