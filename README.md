# TangentIcons
We welcome PRs from the community!
We want to make contributing to this project as easy and transparent as possible.

In order to add your new token to the Tangent DEX (exchange.tangent.bar), you need to follow these steps:

1. Fork the repo and then clone the forked repository.
2. Create your branch from main.
3. Make your changes:
3.1. Create a folder with your token id in the name. (Example 0.0.000000)
3.2. Add info.json and logo file to the created folder. 

info.json example
```
{
  "name": "USD Coin",
  "ticker": "USDC",
  "memo": "By using USDC on Hedera, applications can expect high transaction scalability, 3-second settlement times, and low, predictable transaction fees.\n\n"
} 
```

Supported logo file formats - .svg or .png (high resolution).

4. Test your changes with the node test.js {tokenid} script
5. Push your changes!
6. Once the PR is accepted and CI is passing, we will merge the PR for you.
