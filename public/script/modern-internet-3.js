var name = "Modern Protocols";
document.getElementById("demo1").innerHTML = name;

var name= "A protocol is a set of rules that governs the communications between computers on a network. In order for two computers to talk to each other, they must be speaking the same language. Many different types of network protocols and standards are required to ensure that your computer (no matter which operating system, network card, or application you are using) can communicate with another computer located on the next desk or half-way around the world. The OSI (Open Systems Interconnection) Reference Model defines seven layers of networking protocols. The complexity of these layers is beyond the scope of this tutorial; however, they can be simplified into four layers to help identify some of the protocols with which you should be familiar."
document.getElementById("demo2").innerHTML = name;

var name = "Ethernet"
document.getElementById("demo3").innerHTML = name;

var name = "The physical layer of the network focuses on hardware elements, such as cables, repeaters, and network interface cards. By far the most common protocol used at the physical layer is Ethernet. For example, an Ethernet network (such as 10BaseT or 100BaseTX) specifies the type of cables that can be used, the optimal topology (star vs. bus, etc.), the maximum length of cables, etc. (See the Cabling section for more information on Ethernet standards related to the physical layer)."
document.getElementById("demo4").innerHTML = name;

var name = "The data link layer of the network addresses the way that data packets are sent from one node to another. Ethernet uses an access method called CSMA/CD (Carrier Sense Multiple Access/Collision Detection). This is a system where each computer listens to the cable before sending anything through the network. If the network is clear, the computer will transmit. If some other node is already transmitting on the cable, the computer will wait and try again when the line is clear. Sometimes, two computers attempt to transmit at the same instant. When this happens a collision occurs. Each computer then backs off and waits a random amount of time before attempting to retransmit. With this access method, it is normal to have collisions. However, the delay caused by collisions and retransmitting is very small and does not normally effect the speed of transmission on the network."
document.getElementById("demo4").innerHTML = name;

var name ="IP and IPX Network Layer"
document.getElementById("demo5").innerHTML = name;

var name = "The network layer is in charge of routing network messages (data) from one computer to another. The common protocols at this layer are IP (which is paired with TCP at the transport layer for Internet network) and IPX (which is paired with SPX at the transport layer for some older Macintosh, Linus, UNIX, Novell and Windows networks). Because of the growth in Internet-based networks, IP/TCP are becoming the leading protocols for most networks."
document.getElementById("demo6").innerHTML = name;

var name ="Every network device (such as network interface cards and printers) have a physical address called a MAC (Media Access Control) address. When you purchase a network card, the MAC address is fixed and cannot be changed. Networks using the IP and IPX protocols assign logical addresses (which are made up of the MAC address and the network address) to the devices on the network, This can all become quite complex -- suffice it to say that the network layer takes care of assigning the correct addresses (via IP or IPX) and then uses routers to send the data packets to other networks"
document.getElementById("demo7").innerHTML = name;


