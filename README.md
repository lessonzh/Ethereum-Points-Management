# Ethereum-Points-Management

## About

基于Ethereum的积分管理系统，智能合约部署在ganache测试网上。如果要迁移到主网，请修改truffle.js 文件。

项目包含银行管理，商户管理以及用户管理三个部分。涉及用户注册与登录，商户注册与登录，添加商品，购买商品，显示余额等功能。



## 环境准备

### 当前系统版本

npm 5.6.0

node v9.8.0

Truffle v4.1.13 (core: 4.1.13)

Solidity v0.4.24 (solc-js)

geth 1.8.10-stable

ganache v1.2.2



## 技术栈

nodejs + truffle + web3 + webpack



## 项目运行

`在本地将ganache运行起来，默认监听端口7545`

```
git clone https://github.com/lessonzh/Ethereum-Points-Management 

cd Ethereum-Points-Management

npm install

truffle compile 

truffle migrate --network truffle

npm run dev

访问: http://localhost:3333（localhost修改为自己的ip地址）

```

## 效果演示

homepage

![home](http://ww1.sinaimg.cn/large/a1843a8bgy1fwdqs3zm3lj20qb0nwaan.jpg)



customer

![customer](http://ww1.sinaimg.cn/large/a1843a8bgy1fwdqsqpgwfj20r10ih0t0.jpg)

seller

![seller](http://ww1.sinaimg.cn/large/a1843a8bgy1fwdqt2eb39j20qu0kr74l.jpg)

bank

![bank](http://ww1.sinaimg.cn/large/a1843a8bgy1fwdqtbor0xj20qx0dxq34.jpg)

## 功能列表

- 发行积分
- 查询积分总数
- 查询清算积分
- 商户注册
- 添加商品
- 转让积分
- 客户注册
- 购买商品
- 查询余额



## 项目布局

```
.
├── app
│   ├── bank.html
│   ├── customer.html
│   ├── index.html
│   ├── javascripts
│   │   ├── app.js
│   │   ├── bank.js
│   │   ├── customer.js
│   │   ├── merchant.js
│   │   └── utils.js
│   ├── merchant.html
│   └── stylesheets
│       └── app.css
├── contracts
│   ├── Migrations.sol
│   └── Score.sol                 积分合约
├── LICENSE
├── migrations
│   ├── 1_initial_migration.js
│   └── 2_deploy_contracts.js
├── package.json
├── package-lock.json
├── README.md
├── test
│   ├── metacoin.js
│   └── TestMetacoin.sol
├── truffle.js
└── webpack.config.js

```

# 
