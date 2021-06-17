'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `仙女是生我气了吗?<br /><br/><br /><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fres03.meng2u.com%2Fdeduct_attachment%2Fprogram%2Fa102%2F88%2F43%2FAuE61EcaeNDFTROS.jpg&refer=http%3A%2F%2Fres03.meng2u.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626506845&t=7a4d2eab770853fc2c0c56b0150928a6" />`;
  }
}

module.exports = HomeController;
