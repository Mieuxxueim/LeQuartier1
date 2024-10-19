import { world, system } from "@minecraft/server";
import {
	ActionFormData,
	MessageFormData,
	ModalFormData
} from "@minecraft/server-ui";







world.afterEvents.itemUse.subscribe(event => {

	switch (event.itemStack.typeId) {

		//crack
		case "l:crack":
			system.run(() => {
				const player = event.source;

				player.addEffect("strength", 30 * 20, { amplifier: 3 })
				player.addEffect("darkness", 7 * 20, { amplifier: 3 })

				player.sendMessage("9 de crack = Paul le crack")
				player.scoreboardIdentity("test")
				event.itemStack.typeId == "l:poudre"
			});
			break
		//Coke
		case "l:coke":
			system.run(() => {
				const player = event.source;
				player.addEffect("speed", 120 * 20, { amplifier: 2 })
				player.addEffect("darkness", 2 * 20, { amplifier: 3 })

				if (player.name.toLowerCase == "sader66666666") {
					player.sendMessage("wlh jvais ldire a Lou")
				}
			});
			break
		// BISSAP

		case "l:bissap":
			system.run(() => {
				const player = event.source;
				player.addEffect("instant_health", 10 * 20, { amplifier: 3 })

				player.sendMessage("MOUANDA PRIME")


			});
			break


		// METH
		case "l:meth":
			system.run(() => {
				const player = event.source;
				player.addEffect("resistance", 30 * 20, { amplifier: 2 })
				player.addEffect("darkness", 5 * 20, { amplifier: 3 })

				if (player.name == "thoLeTrain") {
					player.sendMessage("Test Thomas")
				}
			});
			break

		case "l:burger":
			system.run(() => {
				const player = event.source;
				if (player.name == "kilyandu59") {
					player.sendMessage("abuse en pas kilyan...")
				}


			});
			break;

		case "l:burgerketchup":
			system.run(() => {
				const player = event.source;
				if (player.name == "kilyandu59") {
					player.sendMessage("abuse en pas kilyan...")
				}
				player.addEffect("absorption", 30 * 20, { amplifier: 3 })


			});
			break;

		case "l:burgeralgerien":
			system.run(() => {
				const player = event.source;
				if (player.name.toLowerCase == "sader66666666") {
					player.sendMessage("vrai dz hein sajed")
				}
				player.addEffect("fire_resistance", 30 * 20, { amplifier: 3 })


			});
			break;

		case "l:burgermayo":
			system.run(() => {
				const player = event.source;

				player.addEffect("haste", 300 * 20, { amplifier: 3 })


			});
			break;

		case "l:burgerdouteux":
			system.run(() => {
				const player = event.source;
				player.sendMessage("???? belek a toi")
				player.addEffect("poison", 10 * 20, { amplifier: 3 })


			});
			break;


		case "l:congo":
			const player = event.source;
			player.sendMessage("GYAT")

			const customUi = new ActionFormData();
			customUi.title("GYAT");
			customUi.body("GYAT");
			customUi.button("GYAT", "texture/items/lootboss/caca_baton");
			customUi.button("GYAT", "texture/items/lootboss/caca_baton.png");
			system.run(() => {


				customUi.show(player).then(r => {
					// This will stop the code when the player closes the form
					if (r.canceled) return;

					let response = r.selection;
					switch (response) {
						case 0:
							// Do something when button 1 is pressed
							// Don't forget "break" for every case
							player.sendMessage("WHATA GYAT")
							break;

						case 1:
							// Do something when button 2 is pressed
							player.sendMessage("GYAT TALMO")
							break;

						// You can add cases for each button
						default:
						// Use this when your button doesn't have a function yet
						// You don't need to use "break" on default case
						// Remember to place the default on very bottom
					}
				}).catch(e => {
					console.error(e, e.stack);
				});
			});
			break;





	}

});



