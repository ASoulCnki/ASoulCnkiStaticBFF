'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.response.type = 'html';
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../public/index.html'));
  }
  async proxy() {
    const { ctx } = this;
    const data = ctx.request.body;
    const response = (await ctx.curl('https://asoulcnki.asia/v1/api/check', { data }));
    ctx.body = response;
  }
}

module.exports = HomeController;
