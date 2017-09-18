---
layout: post
title: "Gesture based distributed user interaction system for a reconfigurable self-organizing smart wall"
description: "We describe user interactions with the self-organized amorphous wall, a modular, fully distributed system of computational building blocks that communicate locally for creatingsmart surfaces and functional room dividers.  We describe a menu  and  a  widget-based  approach  in  which  functions  are color-coded and can be selected by dragging them from module to module on the surface of the wall. We also propose an on-off switch gesture and a dial gesture each spanning multiple units as canonical input mechanisms that are realized in a fully distributed way."
thumb_image: "about.jpg"
tags: [distributedsystems, swarmrobotics, embeddedsystems, hci, design]
---

For 2013 and 2014, I spent a good deal of my free time and all of my summer working on research in Swarm Robotics at the University of Colorado Boulder in Professor Nikolaus Correll's Lab. 
My main interest was in how swarm robotics could be deployed to create new interesting interaction models. 

I began my work at Correll Lab working on the construction of an amorphous smart wall. The system consisted of a set of hexagonal blocks, each embedded with a atmega microcontroller, a sensor array, power systems, coms and LEDs. Each block was made out of acrylic, with an aluminum border which is sensitive to touch and a variable transparancy faceplate which goes from opaque to clear when a voltage is applied. 

Each block on each of the six sides has 4 pogo pins which carry power and RX/TX to neighboring blocks. The blocks can then be stacked to create a .......
And the system requires no external controller, all functionality for the wall is managed within the network of blocks, so the system is portable.

The system becomes interesting because though the core functionalty and software of the RTOS is identical from block to block, the blocks can have heterogenous hardware. So one block may be a camera block, another block may be use for HVAC or another could be for sound. Because of the networked nature of the system, capablities can be shared and combined, for instance a single microphone block and a set of speaker blocks could be combined to create a loud speaker. 

Because the system is required to be reconfigurable, the question of a deployable distributed user interface becomes important. Touch is a natural interaction for a wall and it is easy to implement with the capablilites of the blocks. However, since the configuration of blocks could entirely different from one setup to another, in order to establish a usable touch wall, there are initalization algorithms that need to be created. 

## Initialization of the Wall

The first issue of the wall is where are all the nodes of the wall in relation to each other. Without localization, touch or any sort of multinode display or action is impossible. The approach we used leverages the fact that each block is the same dimentions and that each block is created with a unique identifier. We desiagnate a block the origin node (though in the implemenation in the paper this is hard coded, a simple leader election algorithm would suffice to define the origin node of the network). The origin node first calculates the coordinates of its borders (where the touch sensors are). Then the origin node multicasts to the bordering blocks the calculated center of the border blocks in relation to its center. Each of these border nodes then does the same process, propogating localization through the network. The location setting message also includes a hop count so blocks will localized based on the message with the lowest hop count. 

Now that each block knows where it is in relation to others, it is now possible to start creating more interesting interfaces to leverage the features of the wall. 

## Gesture Based Distributed User Interaction System for a Reconfigurable Self-Organizing Smart Wall

> See paper for full details: ""

At the time of the paper, there were a lot of potential functions that the wall could implement based on the sensors embedded in the control board. The wall can change transparency, it can act as a lighting system, a sound system, an HVAC system and a display.

All of these systems require user controls that are intuitive but also possible to be implemented within the network. The simplest technical solution is to have each block expose itself as the interface for the wall, using the six touch buttons as the input mechinism. The issue with this is that its is hard to convey usuful information on a single block that can has no display. 

A better solution is a multinode system where a subset of the wall work together to expose a more useful interface.

### Establishing a Multinode Interface 

Since the system is distributed and there is no hierarchy in the system, the blocks must self organize to create the interface. The way we do this is when a user touches on of the blocks on the wall in an effort to accomplish a task, the block that was touched recruites the surrounding nodes to create a flower like menu system. At the time of the paper the menu functions are reprensented as colors, however when displays are integrated into the face of the block, the menu becomes more discriptive. 

<< INSERT IMAGE HERE >>

A user can then select a function by sliding a block color into the center. 

We then describe a set of interaction models to address various tasks. 

### Interaction Models 

#### Binary Settings 

For binary settings (ON / OFF) we show a switch like interface where swiping from the bottom to the top or the top to the bottom flips the switch. 

*A more intuitive interaction maybe to make a similar looking interface but in order to reflect device state, the current state is illiminated and the oppsite state should be white. Then the user should just have to touch the block representing the state desired*

#### Granular Settings

For settings that have more granular controls than on or off, we discribe a dial interface. The user swipes around the center block in a clockwise or counter-clockwise motion in order to increase or decrease the setting value.

<< INSERT IMAGE HERE >>