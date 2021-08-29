# Grain WRC20 Implementation
**This repository is a work in progress!**

This repository contains a [WRC20](https://github.com/ewasm/wrc20-examples) (Ewasm-based ERC20) implementation in [Grain](https://grain-lang.org).

## Building
This project assumes that the Grain compiler is installed on your system. To build:
```bash
$ grain --no-gc src/wrc20.gr
```

## Testing
TBD

To run an Ewasm-compatible Ethereum testnet, you can either follow Ewasm's [instructions](https://github.com/ewasm/testnet) or use docker:
```bash
$ docker pull pblair/ethereum-ewasm-testnet
```
The image can be executed with an appropriate genesis block.
