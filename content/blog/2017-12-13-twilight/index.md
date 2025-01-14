+++
title = "Twilight"
description ="Reconfigurable Self Organizing Office Lighting"

[taxonomies]
tags = ["distributed systems", "swarm robotics", "embedded systems", "hci", "design"]
+++

![install](assets/install.jpg)

> A portion of the Twilight Installation in the office of ACM@UIUC

Twilight is a concept for self organizing office lighting based on similar ideas to my work on
the [Amorphous Facade](amorphous-facade). I did this work for my Undergraduate Senior Project
with Rauhul Varma and advised by Rebecca Chen and Prof. Can Bayram.

Phillips Hue and similar lighting systems are really popular and they actually can have health
benefits for their users as well as be a useful display of information. Having the correct color temperature
at certain times of day for example improves peoples' happiness and their productivity. Since
we spend a majority of our days in the office, it makes sense that we would want similar benefits
at work. Solutions like Hue won't work in the office place due to their architecture. They operate
on a hub spoke model where lights will connect to a hub which connects the lights to the network
where they will be controlled by a cloud service, operated by Phillips themselves. Users are therefore
beholden to Phillips to keep the service running in order to access their lights. This immediately
is not acceptable to a business. This architecture also limits scalability and increases network congestion,
where for every $N$ lights you need $M$ hubs. This sort of model is common place across the
range of IoT devices and as a rebuttal to the current industry approach to ubiquitous computing, we present a lighting
platform called Twilight that seeks to demonstrate the potential of intelligent and easy to
use smart devices. Twilight achieves these goals by applying ideas from the field of swarm robotics and developing
a lighting system that is self-organizing and reconfigurable.

![concept](assets/concept.png)

> Concept art for Twilight, lights are designed to be compatible with standard ceiling tiles and magnetically mounted.

Having these properties allows you to infinitely scale out the system, no longer requiring hubs to connect them.
Lights communicate amongst themselves in order to change properties like their colors and having federated control
of the lighting system creates desirable properties like fault tolerance. If key nodes in the system go down,
the lighting system is resilient or in the worst case can partition itself into two separate fully operational systems.

### Hardware

Each light is setup as a box, the size of a standard ceiling tile and ringed with magnets for mounting. On the internal
perimeter there is reflective tape and an LED strip as the actual light source. The strip is controlled by a Raspberry Pi
and a custom control board which also connects the light to other lights in the network. Blocks are run off standard $120 VAC$
wall power.

![hw](assets/hw.png)
> The hardware architecture for Twilight

![board](assets/board.png)
> The custom controller for Twilight node

### Software

We chose a Raspberry Pi because in addition to building this project for our Senior Design Project we also
made this as an installation for the UIUC Chapter of ACM. It was meant to be installed in their office and
serve as a teaching tool for swarm robotics. Raspberry Pis make Twilight way more accessible than an embedded
programming environment.

![sw](assets/sw.png)

> The software architecture for Twilight

#### Self-Organization

The whole point of this system is that we can build a bunch of lights, but they organize themselves to
create smart behavior. The first step is localization. Conveniently, the lights are arranged in a grid on
the ceiling. We therefore start by gossiping between nodes until they elect a leader, the block with the
"lowest MAC address". This node will also be the "border router" the bridge between the LAN and the Twilight network.
This is dynamic role so if this node is lost then a new border router is elected. This node also serves as the origin of the grid.
From here messages are propagated telling nodes their coordinates until each node knows where it is. Now developers can create
applications which just index nodes in the grid and set states for them or they can send out a global command and let the network
resolve how to implement it. For instance below is a example of a command to set the grid white. Nodes receive and send commands until
all nodes are the right color.

![sync](assets/sync.gif)

## The Installation

Here are some cool videos and pictures of the system.

![deploy](assets/deploy.gif)
> Twilight running on the ceiling of the ACM office

![installation](assets/installation.jpg)
> Installing a Twilight node

![system](assets/system.jpg)
> Three twilight nodes connected


> You can find the full thesis here: [Twilight: Reconfigurable Self Organizing Office Lighting](https://github.com/narendasan/narendasan.com/raw/master/_assets/files/twilight_reconfigurable_self_organizing%20_office_lighting.pdf)


> You can find the source code and schematics can be found here: [https://github.com/acm-uiuc/twilight-old](https://github.com/acm-uiuc/twilight-old)