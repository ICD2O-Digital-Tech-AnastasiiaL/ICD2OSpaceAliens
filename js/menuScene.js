// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
/* global Phaser */

class MenuScene extends Phaser.Scene {

    constructor() {
        super({ key: "menuScene" })

        this.MenuSceneBackgroundImage = null
        this.startButton = null
    }

    init(data) {
      this.cameras.main.setBackgroundColor("ffffff")
    }
    
    preload() {
        console.log("Menu Scene")
        this.load.image('menuSceneBackground', 'assets/menuScreen.png')
        this.load.image('startButton', 'assets/start.png')
    }

    create(data) {
        this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
        this.menuSceneBackgroundImage.x = 1920 / 2
        this.menuSceneBackgroundImage.y = 1080 / 2

        this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
        this.startButton.setInteractive({ useHandCursor: true })
        this.startButton.on('pointerdown', () => this.clickButton())
    }

    update(time, delta) {
    }

    clickButton() {
        this.scene.start('gameScene')
    }
}

export default MenuScene