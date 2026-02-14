// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title DEAL Token ($DEAL)
 * @dev Infraestructura soberana de capital para el ecosistema DEAL.
 */
contract DealToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("DEAL Token", "DEAL") Ownable(msg.sender) {
        // Suministro inicial: 1,000,000,000 $DEAL
        _mint(msg.sender, 1000000000 * 10**decimals());
    }

    // Función para que DALabs pueda gestionar la red de ser necesario
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}