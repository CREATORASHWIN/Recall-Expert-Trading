import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Customer {
  countryCode: string;
  mobile: string;
  name: string;
  email: string;
  shippingAddress: string;
  nearbyLandmark: string;
  address: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
cancel() {
throw new Error('Method not implemented.');
}
    products = [
    // Electronics (30 items total)
    { name: 'Smart Watch', price: 'AED 150', image: 'smartwatch.jpg', category: 'Electronics' },
    { name: 'Bluetooth Speaker', price: 'AED 120', image: 'bluetooth_speaker.jpg', category: 'Electronics' },
    { name: 'Wireless Earbuds', price: 'AED 100', image: 'wireless_earbuds.jpg', category: 'Electronics' },
    { name: 'Fitness Tracker', price: 'AED 140', image: 'fitness_tracker.jpg', category: 'Electronics' },
    { name: 'LED Desk Lamp', price: 'AED 85', image: 'led_desk_lamp.jpg', category: 'Electronics' },
    { name: 'Portable Power Bank', price: 'AED 90', image: 'power_bank.jpg', category: 'Electronics' },
    { name: 'USB Charging Cable', price: 'AED 25', image: 'usb_charging_cable.jpg', category: 'Electronics' },
    { name: 'Laptop Cooling Pad', price: 'AED 70', image: 'laptop_cooling_pad.jpg', category: 'Electronics' },
    { name: 'Wireless Mouse', price: 'AED 60', image: 'wireless_mouse.jpg', category: 'Electronics' },
    { name: 'Bluetooth Keyboard', price: 'AED 80', image: 'bluetooth_keyboard.jpg', category: 'Electronics' },
    { name: 'Mobile Stand Holder', price: 'AED 20', image: 'mobile_stand_holder.jpg', category: 'Electronics' },
    { name: 'Phone Tripod', price: 'AED 45', image: 'phone_tripod.jpg', category: 'Electronics' },
    { name: 'Car Phone Charger', price: 'AED 35', image: 'car_phone_charger.jpg', category: 'Electronics' },
    { name: 'Smart Home Plug', price: 'AED 95', image: 'smart_home_plug.jpg', category: 'Electronics' },
    { name: 'Noise Cancelling Headphones', price: 'AED 180', image: 'noise_cancelling_headphones.jpg', category: 'Electronics' },
    // Added Electronics
    { name: '4K Action Camera', price: 'AED 220', image: 'action_camera.jpg', category: 'Electronics' },
    { name: 'VR Headset', price: 'AED 350', image: 'vr_headset.jpg', category: 'Electronics' },
    { name: 'Smart Thermostat', price: 'AED 250', image: 'smart_thermostat.jpg', category: 'Electronics' },
    { name: 'Gaming Controller', price: 'AED 130', image: 'gaming_controller.jpg', category: 'Electronics' },
    { name: 'Drone', price: 'AED 450', image: 'drone.jpg', category: 'Electronics' },
    { name: 'Wireless Charger', price: 'AED 75', image: 'wireless_charger.jpg', category: 'Electronics' },
    { name: 'Smart Light Bulb', price: 'AED 50', image: 'smart_light_bulb.jpg', category: 'Electronics' },
    { name: 'External Hard Drive', price: 'AED 200', image: 'external_hard_drive.jpg', category: 'Electronics' },
    { name: 'HDMI Cable', price: 'AED 30', image: 'hdmi_cable.jpg', category: 'Electronics' },
    { name: 'Smart Doorbell', price: 'AED 300', image: 'smart_doorbell.jpg', category: 'Electronics' },
    { name: 'Tablet Stand', price: 'AED 40', image: 'tablet_stand.jpg', category: 'Electronics' },
    { name: 'Bluetooth Car Kit', price: 'AED 70', image: 'bluetooth_car_kit.jpg', category: 'Electronics' },
    { name: 'WiFi Range Extender', price: 'AED 150', image: 'wifi_range_extender.jpg', category: 'Electronics' },
    { name: 'Smart Smoke Detector', price: 'AED 180', image: 'smart_smoke_detector.jpg', category: 'Electronics' },
    { name: 'Portable Projector', price: 'AED 400', image: 'portable_projector.jpg', category: 'Electronics' },

    // Grocery (Rice, Flour, etc.) (30 items total)
    { name: 'Basmati Rice', price: 'AED 25', image: 'basmati_rice.jpg', category: 'Grocery' },
    { name: 'Sona Masoori Rice', price: 'AED 22', image: 'sona_masoori_rice.jpg', category: 'Grocery' },
    { name: 'Idli Rice', price: 'AED 20', image: 'idli_rice.jpg', category: 'Grocery' },
    { name: 'Wheat Flour', price: 'AED 18', image: 'wheat_flour.jpg', category: 'Grocery' },
    { name: 'Maida', price: 'AED 15', image: 'maida.jpg', category: 'Grocery' },
    { name: 'Rava', price: 'AED 13', image: 'rava.jpg', category: 'Grocery' },
    { name: 'Sugar', price: 'AED 14', image: 'sugar.jpg', category: 'Grocery' },
    { name: 'Brown Sugar', price: 'AED 16', image: 'brown_sugar.jpg', category: 'Grocery' },
    { name: 'Rock Salt', price: 'AED 10', image: 'rock_salt.jpg', category: 'Grocery' },
    { name: 'Poha', price: 'AED 12', image: 'poha.jpg', category: 'Grocery' },
    { name: 'Sabudana', price: 'AED 11', image: 'sabudana.jpg', category: 'Grocery' },
    { name: 'Rice Flour', price: 'AED 14', image: 'rice_flour.jpg', category: 'Grocery' },
    { name: 'Corn Flour', price: 'AED 13', image: 'corn_flour.jpg', category: 'Grocery' },
    { name: 'Jaggery Blocks', price: 'AED 17', image: 'jaggery_blocks.jpg', category: 'Grocery' },
    { name: 'Iodized Salt', price: 'AED 9', image: 'iodized_salt.jpg', category: 'Grocery' },
    // Added Grocery
    { name: 'Barley', price: 'AED 18', image: 'barley.jpg', category: 'Grocery' },
    { name: 'Oats', price: 'AED 20', image: 'oats.jpg', category: 'Grocery' },
    { name: 'Quinoa', price: 'AED 28', image: 'quinoa.jpg', category: 'Grocery' },
    { name: 'Semolina', price: 'AED 16', image: 'semolina.jpg', category: 'Grocery' },
    { name: 'Millet', price: 'AED 17', image: 'millet.jpg', category: 'Grocery' },
    { name: 'Cornmeal', price: 'AED 15', image: 'cornmeal.jpg', category: 'Grocery' },
    { name: 'Tapioca', price: 'AED 14', image: 'tapioca.jpg', category: 'Grocery' },
    { name: 'Gram Flour', price: 'AED 19', image: 'gram_flour.jpg', category: 'Grocery' },
    { name: 'Buckwheat', price: 'AED 21', image: 'buckwheat.jpg', category: 'Grocery' },
    { name: 'Amaranth', price: 'AED 23', image: 'amaranth.jpg', category: 'Grocery' },
    { name: 'Chia Seeds', price: 'AED 25', image: 'chia_seeds.jpg', category: 'Grocery' },
    { name: 'Flax Seeds', price: 'AED 24', image: 'flax_seeds.jpg', category: 'Grocery' },
    { name: 'Psyllium Husk', price: 'AED 26', image: 'psyllium_husk.jpg', category: 'Grocery' },
    { name: 'Coconut Flour', price: 'AED 22', image: 'coconut_flour.jpg', category: 'Grocery' },
    { name: 'Arrowroot Powder', price: 'AED 20', image: 'arrowroot_powder.jpg', category: 'Grocery' },

    // Pulses (30 items total)
    { name: 'Green Gram', price: 'AED 15', image: 'green_gram.jpg', category: 'Pulses' },
    { name: 'Black Gram', price: 'AED 16', image: 'black_gram.jpg', category: 'Pulses' },
    { name: 'Red Kidney Beans', price: 'AED 17', image: 'red_kidney_beans.jpg', category: 'Pulses' },
    { name: 'Bengal Gram', price: 'AED 14', image: 'bengal_gram.jpg', category: 'Pulses' },
    { name: 'Black Eyed Peas', price: 'AED 13', image: 'black_eyed_peas.jpg', category: 'Pulses' },
    { name: 'Horse Gram', price: 'AED 12', image: 'horse_gram.jpg', category: 'Pulses' },
    { name: 'White Peas', price: 'AED 13', image: 'white_peas.jpg', category: 'Pulses' },
    { name: 'Moth Beans', price: 'AED 11', image: 'moth_beans.jpg', category: 'Pulses' },
    { name: 'Green Peas', price: 'AED 10', image: 'green_peas.jpg', category: 'Pulses' },
    { name: 'Sprouted Moong', price: 'AED 15', image: 'sprouted_moong.jpg', category: 'Pulses' },
    { name: 'Yellow Split Peas', price: 'AED 13', image: 'yellow_split_peas.jpg', category: 'Pulses' },
    { name: 'Chickpeas', price: 'AED 14', image: 'chickpeas.jpg', category: 'Pulses' },
    { name: 'Urad Split Dal', price: 'AED 12', image: 'urad_split_dal.jpg', category: 'Pulses' },
    { name: 'Chana Split Dal', price: 'AED 11', image: 'chana_split_dal.jpg', category: 'Pulses' },
    { name: 'Masoor Split Dal', price: 'AED 10', image: 'masoor_split_dal.jpg', category: 'Pulses' },
    // Added Pulses
    { name: 'Lentils', price: 'AED 14', image: 'lentils.jpg', category: 'Pulses' },
    { name: 'Black Lentils', price: 'AED 15', image: 'black_lentils.jpg', category: 'Pulses' },
    { name: 'Split Moong Dal', price: 'AED 13', image: 'split_moong_dal.jpg', category: 'Pulses' },
    { name: 'Pink Beans', price: 'AED 18', image: 'pink_beans.jpg', category: 'Pulses' },
    { name: 'Lima Beans', price: 'AED 17', image: 'lima_beans.jpg', category: 'Pulses' },
    { name: 'Navy Beans', price: 'AED 16', image: 'navy_beans.jpg', category: 'Pulses' },
    { name: 'Cannellini Beans', price: 'AED 19', image: 'cannellini_beans.jpg', category: 'Pulses' },
    { name: 'Pigeon Peas', price: 'AED 14', image: 'pigeon_peas.jpg', category: 'Pulses' },
    { name: 'Mung Beans', price: 'AED 15', image: 'mung_beans.jpg', category: 'Pulses' },
    { name: 'Red Lentils', price: 'AED 14', image: 'red_lentils.jpg', category: 'Pulses' },
    { name: 'Split Black Gram', price: 'AED 13', image: 'split_black_gram.jpg', category: 'Pulses' },
    { name: 'Pink Lentils', price: 'AED 15', image: 'pink_lentils.jpg', category: 'Pulses' },
    { name: 'Split Chickpeas', price: 'AED 14', image: 'split_chickpeas.jpg', category: 'Pulses' },
    { name: 'French Lentils', price: 'AED 17', image: 'french_lentils.jpg', category: 'Pulses' },
    { name: 'Adzuki Beans', price: 'AED 18', image: 'adzuki_beans.jpg', category: 'Pulses' },

    // Lentils (30 items total)
    { name: 'Toor Dal', price: 'AED 18', image: 'toor_dal.jpg', category: 'Lentils' },
    { name: 'Moong Dal', price: 'AED 17', image: 'moong_dal.jpg', category: 'Lentils' },
    { name: 'Masoor Dal', price: 'AED 16', image: 'masoor_dal.jpg', category: 'Lentils' },
    { name: 'Urad Dal', price: 'AED 15', image: 'urad_dal.jpg', category: 'Lentils' },
    { name: 'Chana Dal', price: 'AED 14', image: 'chana_dal.jpg', category: 'Lentils' },
    { name: 'Green Moong Dal', price: 'AED 15', image: 'green_moong_dal.jpg', category: 'Lentils' },
    { name: 'Yellow Moong Dal', price: 'AED 14', image: 'yellow_moong_dal.jpg', category: 'Lentils' },
    { name: 'Split Peas', price: 'AED 13', image: 'split_peas.jpg', category: 'Lentils' },
    { name: 'Red Lentils', price: 'AED 16', image: 'red_lentils.jpg', category: 'Lentils' },
    { name: 'Black Lentils', price: 'AED 17', image: 'black_lentils.jpg', category: 'Lentils' },
    { name: 'Whole Masoor Dal', price: 'AED 18', image: 'whole_masoor_dal.jpg', category: 'Lentils' },
    { name: 'Split Urad Dal', price: 'AED 14', image: 'split_urad_dal.jpg', category: 'Lentils' },
    { name: 'Red Chana Dal', price: 'AED 13', image: 'red_chana_dal.jpg', category: 'Lentils' },
    { name: 'Yellow Split Dal', price: 'AED 12', image: 'yellow_split_dal.jpg', category: 'Lentils' },
    { name: 'Black Chana Dal', price: 'AED 11', image: 'black_chana_dal.jpg', category: 'Lentils' },
    // Added Lentils
    { name: 'Masoor Whole Dal', price: 'AED 19', image: 'masoor_whole_dal.jpg', category: 'Lentils' },
    { name: 'Green Pea Dal', price: 'AED 15', image: 'green_pea_dal.jpg', category: 'Lentils' },
    { name: 'Pigeon Pea Dal', price: 'AED 17', image: 'pigeon_pea_dal.jpg', category: 'Lentils' },
    { name: 'Yellow Lentils', price: 'AED 16', image: 'yellow_lentils.jpg', category: 'Lentils' },
    { name: 'Black Moong Dal', price: 'AED 15', image: 'black_moong_dal.jpg', category: 'Lentils' },
    { name: 'Split Masoor Dal', price: 'AED 14', image: 'split_masoor_dal.jpg', category: 'Lentils' },
    { name: 'Split Toor Dal', price: 'AED 16', image: 'split_toor_dal.jpg', category: 'Lentils' },
    { name: 'Yellow Urad Dal', price: 'AED 13', image: 'yellow_urad_dal.jpg', category: 'Lentils' },
    { name: 'Green Chana Dal', price: 'AED 14', image: 'green_chana_dal.jpg', category: 'Lentils' },
    { name: 'Pink Lentils', price: 'AED 15', image: 'pink_lentils.jpg', category: 'Lentils' },
    { name: 'Orange Lentils', price: 'AED 15', image: 'orange_lentils.jpg', category: 'Lentils' },
    { name: 'Brown Lentils', price: 'AED 14', image: 'brown_lentils.jpg', category: 'Lentils' },
    { name: 'Red Urad Dal', price: 'AED 15', image: 'red_urad_dal.jpg', category: 'Lentils' },
    { name: 'Yellow Toor Dal', price: 'AED 14', image: 'yellow_toor_dal.jpg', category: 'Lentils' },
    { name: 'Black Split Dal', price: 'AED 13', image: 'black_split_dal.jpg', category: 'Lentils' },

    // Fruits (30 items total)
    { name: 'Apple', price: 'AED 5', image: 'apple.jpg', category: 'Fruits' },
    { name: 'Orange', price: 'AED 4', image: 'orange.jpg', category: 'Fruits' },
    { name: 'Banana', price: 'AED 3', image: 'banana.jpg', category: 'Fruits' },
    { name: 'Mango', price: 'AED 6', image: 'mango.jpg', category: 'Fruits' },
    { name: 'Grapes', price: 'AED 7', image: 'grapes.jpg', category: 'Fruits' },
    { name: 'Pineapple', price: 'AED 8', image: 'pineapple.jpg', category: 'Fruits' },
    { name: 'Watermelon', price: 'AED 5', image: 'watermelon.jpg', category: 'Fruits' },
    { name: 'Papaya', price: 'AED 6', image: 'papaya.jpg', category: 'Fruits' },
    { name: 'Strawberry', price: 'AED 9', image: 'strawberry.jpg', category: 'Fruits' },
    { name: 'Blueberry', price: 'AED 10', image: 'blueberry.jpg', category: 'Fruits' },
    { name: 'Kiwi', price: 'AED 8', image: 'kiwi.jpg', category: 'Fruits' },
    { name: 'Pear', price: 'AED 7', image: 'pear.jpg', category: 'Fruits' },
    { name: 'Cherries', price: 'AED 11', image: 'cherries.jpg', category: 'Fruits' },
    { name: 'Plums', price: 'AED 9', image: 'plums.jpg', category: 'Fruits' },
    { name: 'Avocado', price: 'AED 12', image: 'avocado.jpg', category: 'Fruits' },
    // Added Fruits
    { name: 'Pomegranate', price: 'AED 10', image: 'pomegranate.jpg', category: 'Fruits' },
    { name: 'Lychee', price: 'AED 15', image: 'lychee.jpg', category: 'Fruits' },
    { name: 'Dragon Fruit', price: 'AED 18', image: 'dragon_fruit.jpg', category: 'Fruits' },
    { name: 'Raspberry', price: 'AED 16', image: 'raspberry.jpg', category: 'Fruits' },
    { name: 'Blackberry', price: 'AED 17', image: 'blackberry.jpg', category: 'Fruits' },
    { name: 'Cantaloupe', price: 'AED 12', image: 'cantaloupe.jpg', category: 'Fruits' },
    { name: 'Honeydew', price: 'AED 13', image: 'honeydew.jpg', category: 'Fruits' },
    { name: 'Cranberry', price: 'AED 15', image: 'cranberry.jpg', category: 'Fruits' },
    { name: 'Tangerine', price: 'AED 11', image: 'tangerine.jpg', category: 'Fruits' },
    { name: 'Starfruit', price: 'AED 14', image: 'starfruit.jpg', category: 'Fruits' },
    { name: 'Guava', price: 'AED 10', image: 'guava.jpg', category: 'Fruits' },
    { name: 'Jackfruit', price: 'AED 19', image: 'jackfruit.jpg', category: 'Fruits' },
    { name: 'Persimmon', price: 'AED 16', image: 'persimmon.jpg', category: 'Fruits' },
    { name: 'Passion Fruit', price: 'AED 18', image: 'passion_fruit.jpg', category: 'Fruits' },
    { name: 'Mulberries', price: 'AED 17', image: 'mulberries.jpg', category: 'Fruits' },

    // Vegetables (30 items total)
    { name: 'Tomato', price: 'AED 3', image: 'tomato.jpg', category: 'Vegetables' },
    { name: 'Potato', price: 'AED 2', image: 'potato.jpg', category: 'Vegetables' },
    { name: 'Carrot', price: 'AED 4', image: 'carrot.jpg', category: 'Vegetables' },
    { name: 'Onion', price: 'AED 3', image: 'onion.jpg', category: 'Vegetables' },
    { name: 'Cabbage', price: 'AED 4', image: 'cabbage.jpg', category: 'Vegetables' },
    { name: 'Cauliflower', price: 'AED 5', image: 'cauliflower.jpg', category: 'Vegetables' },
    { name: 'Green Beans', price: 'AED 6', image: 'green_beans.jpg', category: 'Vegetables' },
    { name: 'Bell Pepper', price: 'AED 7', image: 'bell_pepper.jpg', category: 'Vegetables' },
    { name: 'Spinach', price: 'AED 5', image: 'spinach.jpg', category: 'Vegetables' },
    { name: 'Cucumber', price: 'AED 4', image: 'cucumber.jpg', category: 'Vegetables' },
    { name: 'Eggplant', price: 'AED 5', image: 'eggplant.jpg', category: 'Vegetables' },
    { name: 'Zucchini', price: 'AED 6', image: 'zucchini.jpg', category: 'Vegetables' },
    { name: 'Pumpkin', price: 'AED 4', image: 'pumpkin.jpg', category: 'Vegetables' },
    { name: 'Sweet Corn', price: 'AED 6', image: 'sweet_corn.jpg', category: 'Vegetables' },
    { name: 'Lettuce', price: 'AED 5', image: 'lettuce.jpg', category: 'Vegetables' },
    // Added Vegetables
    { name: 'Broccoli', price: 'AED 7', image: 'broccoli.jpg', category: 'Vegetables' },
    { name: 'Brussels Sprouts', price: 'AED 8', image: 'brussels_sprouts.jpg', category: 'Vegetables' },
    { name: 'Kale', price: 'AED 6', image: 'kale.jpg', category: 'Vegetables' },
    { name: 'Asparagus', price: 'AED 9', image: 'asparagus.jpg', category: 'Vegetables' },
    { name: 'Celery', price: 'AED 5', image: 'celery.jpg', category: 'Vegetables' },
    { name: 'Leek', price: 'AED 6', image: 'leek.jpg', category: 'Vegetables' },
    { name: 'Radish', price: 'AED 4', image: 'radish.jpg', category: 'Vegetables' },
    { name: 'Turnip', price: 'AED 5', image: 'turnip.jpg', category: 'Vegetables' },
    { name: 'Beetroot', price: 'AED 6', image: 'beetroot.jpg', category: 'Vegetables' },
    { name: 'Fennel', price: 'AED 7', image: 'fennel.jpg', category: 'Vegetables' },
    { name: 'Artichoke', price: 'AED 10', image: 'artichoke.jpg', category: 'Vegetables' },
    { name: 'Okra', price: 'AED 6', image: 'okra.jpg', category: 'Vegetables' },
    { name: 'Chayote', price: 'AED 5', image: 'chayote.jpg', category: 'Vegetables' },
    { name: 'Edamame', price: 'AED 7', image: 'edamame.jpg', category: 'Vegetables' },
    { name: 'Mushrooms', price: 'AED 8', image: 'mushrooms.jpg', category: 'Vegetables' },

    // Spices (30 items total)
    { name: 'Black Pepper', price: 'AED 12', image: 'black_pepper.jpg', category: 'Spices' },
    { name: 'Turmeric Powder', price: 'AED 10', image: 'turmeric_powder.jpg', category: 'Spices' },
    { name: 'Cumin Seeds', price: 'AED 11', image: 'cumin_seeds.jpg', category: 'Spices' },
    { name: 'Coriander Powder', price: 'AED 9', image: 'coriander_powder.jpg', category: 'Spices' },
    { name: 'Red Chili Powder', price: 'AED 13', image: 'red_chili_powder.jpg', category: 'Spices' },
    { name: 'Garam Masala', price: 'AED 14', image: 'garam_masala.jpg', category: 'Spices' },
    { name: 'Fennel Seeds', price: 'AED 10', image: 'fennel_seeds.jpg', category: 'Spices' },
    { name: 'Mustard Seeds', price: 'AED 8', image: 'mustard_seeds.jpg', category: 'Spices' },
    { name: 'Cardamom', price: 'AED 15', image: 'cardamom.jpg', category: 'Spices' },
    { name: 'Cloves', price: 'AED 13', image: 'cloves.jpg', category: 'Spices' },
    { name: 'Cinnamon Sticks', price: 'AED 14', image: 'cinnamon_sticks.jpg', category: 'Spices' },
    { name: 'Nutmeg', price: 'AED 12', image: 'nutmeg.jpg', category: 'Spices' },
    { name: 'Bay Leaves', price: 'AED 11', image: 'bay_leaves.jpg', category: 'Spices' },
    { name: 'Saffron', price: 'AED 50', image: 'saffron.jpg', category: 'Spices' },
    { name: 'Asafoetida', price: 'AED 9', image: 'asafoetida.jpg', category: 'Spices' },
    // Added Spices
    { name: 'Anise Seeds', price: 'AED 12', image: 'anise_seeds.jpg', category: 'Spices' },
    { name: 'Caraway Seeds', price: 'AED 11', image: 'caraway_seeds.jpg', category: 'Spices' },
    { name: 'Chili Flakes', price: 'AED 13', image: 'chili_flakes.jpg', category: 'Spices' },
    { name: 'Dill Seeds', price: 'AED 10', image: 'dill_seeds.jpg', category: 'Spices' },
    { name: 'Mace', price: 'AED 14', image: 'mace.jpg', category: 'Spices' },
    { name: 'Nigella Seeds', price: 'AED 12', image: 'nigella_seeds.jpg', category: 'Spices' },
    { name: 'Paprika', price: 'AED 13', image: 'paprika.jpg', category: 'Spices' },
    { name: 'Szechuan Pepper', price: 'AED 15', image: 'szechuan_pepper.jpg', category: 'Spices' },
    { name: 'Sumac', price: 'AED 12', image: 'sumac.jpg', category: 'Spices' },
    { name: 'Tamarind Powder', price: 'AED 14', image: 'tamarind_powder.jpg', category: 'Spices' },
    { name: 'White Pepper', price: 'AED 13', image: 'white_pepper.jpg', category: 'Spices' },
    { name: 'Za’atar', price: 'AED 15', image: 'zaatar.jpg', category: 'Spices' },
    { name: 'Celery Salt', price: 'AED 11', image: 'celery_salt.jpg', category: 'Spices' },
    { name: 'Ground Ginger', price: 'AED 12', image: 'ground_ginger.jpg', category: 'Spices' },
    { name: 'Lavender', price: 'AED 10', image: 'lavender.jpg', category: 'Spices' },

    // Dry Fruits (30 items total)
    { name: 'Almonds', price: 'AED 30', image: 'almonds.jpg', category: 'Dry Fruits' },
    { name: 'Cashews', price: 'AED 28', image: 'cashews.jpg', category: 'Dry Fruits' },
    { name: 'Walnuts', price: 'AED 35', image: 'walnuts.jpg', category: 'Dry Fruits' },
    { name: 'Pistachios', price: 'AED 32', image: 'pistachios.jpg', category: 'Dry Fruits' },
    { name: 'Raisins', price: 'AED 20', image: 'raisins.jpg', category: 'Dry Fruits' },
    { name: 'Dates', price: 'AED 25', image: 'dates.jpg', category: 'Dry Fruits' },
    { name: 'Apricots', price: 'AED 27', image: 'apricots.jpg', category: 'Dry Fruits' },
    { name: 'Prunes', price: 'AED 23', image: 'prunes.jpg', category: 'Dry Fruits' },
    { name: 'Figs', price: 'AED 29', image: 'figs.jpg', category: 'Dry Fruits' },
    { name: 'Brazil Nuts', price: 'AED 30', image: 'brazil_nuts.jpg', category: 'Dry Fruits' },
    { name: 'Chestnuts', price: 'AED 28', image: 'chestnuts.jpg', category: 'Dry Fruits' },
    { name: 'Hazelnuts', price: 'AED 31', image: 'hazelnuts.jpg', category: 'Dry Fruits' },
    { name: 'Macadamia Nuts', price: 'AED 33', image: 'macadamia_nuts.jpg', category: 'Dry Fruits' },
    { name: 'Pecans', price: 'AED 29', image: 'pecans.jpg', category: 'Dry Fruits' },
    { name: 'Walnut Halves', price: 'AED 34', image: 'walnut_halves.jpg', category: 'Dry Fruits' },
    // Added Dry Fruits
    { name: 'Goji Berries', price: 'AED 40', image: 'goji_berries.jpg', category: 'Dry Fruits' },
    { name: 'Mulberries', price: 'AED 38', image: 'mulberries.jpg', category: 'Dry Fruits' },
    { name: 'Sunflower Seeds', price: 'AED 22', image: 'sunflower_seeds.jpg', category: 'Dry Fruits' },
    { name: 'Pumpkin Seeds', price: 'AED 23', image: 'pumpkin_seeds.jpg', category: 'Dry Fruits' },
    { name: 'Pine Nuts', price: 'AED 35', image: 'pine_nuts.jpg', category: 'Dry Fruits' },
    { name: 'Chia Seeds', price: 'AED 30', image: 'chia_seeds.jpg', category: 'Dry Fruits' },
    { name: 'Flax Seeds', price: 'AED 29', image: 'flax_seeds.jpg', category: 'Dry Fruits' },
    { name: 'Sesame Seeds', price: 'AED 28', image: 'sesame_seeds.jpg', category: 'Dry Fruits' },
    { name: 'Hazel Nuts', price: 'AED 31', image: 'hazel_nuts.jpg', category: 'Dry Fruits' },
    { name: 'Candied Ginger', price: 'AED 26', image: 'candied_ginger.jpg', category: 'Dry Fruits' },
    { name: 'Coconut Chips', price: 'AED 27', image: 'coconut_chips.jpg', category: 'Dry Fruits' },
    { name: 'Dried Cranberries', price: 'AED 32', image: 'dried_cranberries.jpg', category: 'Dry Fruits' },
    { name: 'Dried Blueberries', price: 'AED 33', image: 'dried_blueberries.jpg', category: 'Dry Fruits' },
    { name: 'Dried Figs', price: 'AED 34', image: 'dried_figs.jpg', category: 'Dry Fruits' },
    { name: 'Candied Orange Peel', price: 'AED 30', image: 'candied_orange_peel.jpg', category: 'Dry Fruits' },

    // Nuts (30 items total)
    { name: 'Peanuts', price: 'AED 18', image: 'peanuts.jpg', category: 'Nuts' },
    { name: 'Hazelnuts', price: 'AED 40', image: 'hazelnuts.jpg', category: 'Nuts' },
    { name: 'Pistachios', price: 'AED 45', image: 'pistachios.jpg', category: 'Nuts' },
    { name: 'Almonds', price: 'AED 50', image: 'almonds.jpg', category: 'Nuts' },
    { name: 'Cashew Nuts', price: 'AED 48', image: 'cashew_nuts.jpg', category: 'Nuts' },
    { name: 'Walnuts', price: 'AED 42', image: 'walnuts.jpg', category: 'Nuts' },
    { name: 'Macadamia', price: 'AED 52', image: 'macadamia.jpg', category: 'Nuts' },
    { name: 'Pecan Nuts', price: 'AED 46', image: 'pecan_nuts.jpg', category: 'Nuts' },
    { name: 'Brazil Nuts', price: 'AED 43', image: 'brazil_nuts.jpg', category: 'Nuts' },
    { name: 'Chestnuts', price: 'AED 41', image: 'chestnuts.jpg', category: 'Nuts' },
    { name: 'Marcona Almonds', price: 'AED 49', image: 'marcona_almonds.jpg', category: 'Nuts' },
    { name: 'Tiger Nuts', price: 'AED 44', image: 'tiger_nuts.jpg', category: 'Nuts' },
    { name: 'Pine Nuts', price: 'AED 47', image: 'pine_nuts.jpg', category: 'Nuts' },
    { name: 'Candlenuts', price: 'AED 38', image: 'candlenuts.jpg', category: 'Nuts' },
    { name: 'Kola Nuts', price: 'AED 36', image: 'kola_nuts.jpg', category: 'Nuts' },
    // Added Nuts
    { name: 'Beechnuts', price: 'AED 35', image: 'beechnuts.jpg', category: 'Nuts' },
    { name: 'Ginkgo Nuts', price: 'AED 37', image: 'ginkgo_nuts.jpg', category: 'Nuts' },
    { name: 'Hickory Nuts', price: 'AED 39', image: 'hickory_nuts.jpg', category: 'Nuts' },
    { name: 'Pili Nuts', price: 'AED 40', image: 'pili_nuts.jpg', category: 'Nuts' },
    { name: 'Sacha Inchi Nuts', price: 'AED 38', image: 'sacha_inchi_nuts.jpg', category: 'Nuts' },
    { name: 'Baru Nuts', price: 'AED 37', image: 'baru_nuts.jpg', category: 'Nuts' },
    { name: 'Candlenuts', price: 'AED 36', image: 'candlenuts2.jpg', category: 'Nuts' },
    { name: 'Water Caltrop Nuts', price: 'AED 35', image: 'water_caltrop_nuts.jpg', category: 'Nuts' },
    { name: 'Beechnuts', price: 'AED 34', image: 'beechnuts2.jpg', category: 'Nuts' },
    { name: 'Candleberry Nuts', price: 'AED 33', image: 'candleberry_nuts.jpg', category: 'Nuts' },

      // Stationery
{ name: 'Ballpoint Pens', price: 'AED 10', image: 'ballpoint_pens.jpg', category: 'Stationery' },
{ name: 'Mechanical Pencils', price: 'AED 15', image: 'mechanical_pencils.jpg', category: 'Stationery' },
{ name: 'Highlighters', price: 'AED 12', image: 'highlighters.jpg', category: 'Stationery' },
{ name: 'Sticky Notes', price: 'AED 8', image: 'sticky_notes.jpg', category: 'Stationery' },
{ name: 'Spiral Notebooks', price: 'AED 18', image: 'spiral_notebooks.jpg', category: 'Stationery' },
{ name: 'Graph Paper Pads', price: 'AED 14', image: 'graph_paper_pads.jpg', category: 'Stationery' },
{ name: 'Whiteboard Markers', price: 'AED 20', image: 'whiteboard_markers.jpg', category: 'Stationery' },
{ name: 'Correction Tape', price: 'AED 7', image: 'correction_tape.jpg', category: 'Stationery' },
{ name: 'Stapler with Pins', price: 'AED 25', image: 'stapler_with_pins.jpg', category: 'Stationery' },
{ name: 'Paper Clips Set', price: 'AED 5', image: 'paper_clips_set.jpg', category: 'Stationery' },
{ name: 'Binder Clips', price: 'AED 6', image: 'binder_clips.jpg', category: 'Stationery' },
{ name: 'Erasers', price: 'AED 4', image: 'erasers.jpg', category: 'Stationery' },
{ name: 'Rulers', price: 'AED 6', image: 'rulers.jpg', category: 'Stationery' },
{ name: 'Desk Organizers', price: 'AED 30', image: 'desk_organizers.jpg', category: 'Stationery' },
{ name: 'File Folders', price: 'AED 10', image: 'file_folders.jpg', category: 'Stationery' },
{ name: 'Drawing Compass Set', price: 'AED 18', image: 'drawing_compass_set.jpg', category: 'Stationery' },
{ name: 'Sticky Flags', price: 'AED 6', image: 'sticky_flags.jpg', category: 'Stationery' },
{ name: 'Fountain Pens', price: 'AED 35', image: 'fountain_pens.jpg', category: 'Stationery' },
{ name: 'Index Cards', price: 'AED 9', image: 'index_cards.jpg', category: 'Stationery' },
{ name: 'Craft Scissors', price: 'AED 11', image: 'craft_scissors.jpg', category: 'Stationery' },

// Fitness
{ name: 'Yoga Mat', price: 'AED 50', image: 'yoga_mat.jpg', category: 'Fitness' },
{ name: 'Dumbbell Set', price: 'AED 120', image: 'dumbbell_set.jpg', category: 'Fitness' },
{ name: 'Resistance Bands', price: 'AED 40', image: 'resistance_bands.jpg', category: 'Fitness' },
{ name: 'Jump Rope', price: 'AED 25', image: 'jump_rope.jpg', category: 'Fitness' },
{ name: 'Kettlebells', price: 'AED 90', image: 'kettlebells.jpg', category: 'Fitness' },
{ name: 'Treadmill', price: 'AED 1200', image: 'treadmill.jpg', category: 'Fitness' },
{ name: 'Foam Roller', price: 'AED 35', image: 'foam_roller.jpg', category: 'Fitness' },
{ name: 'Push-up Bars', price: 'AED 45', image: 'pushup_bars.jpg', category: 'Fitness' },
{ name: 'Ankle Weights', price: 'AED 60', image: 'ankle_weights.jpg', category: 'Fitness' },
{ name: 'Gym Gloves', price: 'AED 30', image: 'gym_gloves.jpg', category: 'Fitness' },
{ name: 'Exercise Ball', price: 'AED 55', image: 'exercise_ball.jpg', category: 'Fitness' },
{ name: 'Pull-up Bar', price: 'AED 85', image: 'pullup_bar.jpg', category: 'Fitness' },
{ name: 'Massage Gun', price: 'AED 250', image: 'massage_gun.jpg', category: 'Fitness' },
{ name: 'Water Bottle', price: 'AED 15', image: 'water_bottle.jpg', category: 'Fitness' },
{ name: 'Adjustable Bench', price: 'AED 350', image: 'adjustable_bench.jpg', category: 'Fitness' },
{ name: 'Fitness Tracker', price: 'AED 199', image: 'fitness_tracker.jpg', category: 'Fitness' },
{ name: 'Agility Ladder', price: 'AED 45', image: 'agility_ladder.jpg', category: 'Fitness' },
{ name: 'Workout Dice', price: 'AED 20', image: 'workout_dice.jpg', category: 'Fitness' },
{ name: 'Battle Ropes', price: 'AED 150', image: 'battle_ropes.jpg', category: 'Fitness' },
{ name: 'Speed Skipping Rope', price: 'AED 28', image: 'speed_skipping_rope.jpg', category: 'Fitness' },

// Toys
{ name: 'Building Blocks', price: 'AED 35', image: 'building_blocks.jpg', category: 'Toys' },
{ name: 'Remote Control Car', price: 'AED 120', image: 'remote_control_car.jpg', category: 'Toys' },
{ name: 'Stuffed Animals', price: 'AED 50', image: 'stuffed_animals.jpg', category: 'Toys' },
{ name: 'Puzzle Games', price: 'AED 40', image: 'puzzle_games.jpg', category: 'Toys' },
{ name: 'LEGO Sets', price: 'AED 150', image: 'lego_sets.jpg', category: 'Toys' },
{ name: 'Board Games', price: 'AED 75', image: 'board_games.jpg', category: 'Toys' },
{ name: 'Toy Kitchen Set', price: 'AED 90', image: 'toy_kitchen_set.jpg', category: 'Toys' },
{ name: 'Musical Instruments for Kids', price: 'AED 60', image: 'musical_instruments_kids.jpg', category: 'Toys' },
{ name: 'Coloring Kit', price: 'AED 30', image: 'coloring_kit.jpg', category: 'Toys' },
{ name: 'Action Figures', price: 'AED 55', image: 'action_figures.jpg', category: 'Toys' },
{ name: 'Dollhouse', price: 'AED 180', image: 'dollhouse.jpg', category: 'Toys' },
{ name: 'Play Tent', price: 'AED 130', image: 'play_tent.jpg', category: 'Toys' },
{ name: 'Educational Flashcards', price: 'AED 25', image: 'educational_flashcards.jpg', category: 'Toys' },
{ name: 'Water Gun', price: 'AED 35', image: 'water_gun.jpg', category: 'Toys' },
{ name: 'Toy Train Set', price: 'AED 100', image: 'toy_train_set.jpg', category: 'Toys' },
{ name: 'Marble Run', price: 'AED 65', image: 'marble_run.jpg', category: 'Toys' },
{ name: 'Slime Kit', price: 'AED 20', image: 'slime_kit.jpg', category: 'Toys' },
{ name: 'Rubik’s Cube', price: 'AED 18', image: 'rubiks_cube.jpg', category: 'Toys' },
{ name: 'Magic Kit', price: 'AED 70', image: 'magic_kit.jpg', category: 'Toys' },
{ name: 'Craft Activity Set', price: 'AED 45', image: 'craft_activity_set.jpg', category: 'Toys' },

// Health
{ name: 'Digital Thermometer', price: 'AED 45', image: 'digital_thermometer.jpg', category: 'Health' },
{ name: 'First Aid Kit', price: 'AED 65', image: 'first_aid_kit.jpg', category: 'Health' },
{ name: 'Blood Pressure Monitor', price: 'AED 150', image: 'blood_pressure_monitor.jpg', category: 'Health' },
{ name: 'Oximeter', price: 'AED 90', image: 'oximeter.jpg', category: 'Health' },
{ name: 'Hand Sanitizer', price: 'AED 10', image: 'hand_sanitizer.jpg', category: 'Health' },
{ name: 'Face Masks', price: 'AED 25', image: 'face_masks.jpg', category: 'Health' },
{ name: 'Vitamin C Tablets', price: 'AED 35', image: 'vitamin_c_tablets.jpg', category: 'Health' },
{ name: 'Protein Powder', price: 'AED 120', image: 'protein_powder.jpg', category: 'Health' },
{ name: 'Glucose Meter', price: 'AED 180', image: 'glucose_meter.jpg', category: 'Health' },
{ name: 'Heating Pad', price: 'AED 60', image: 'heating_pad.jpg', category: 'Health' },
{ name: 'Cold & Flu Medicine', price: 'AED 40', image: 'cold_flu_medicine.jpg', category: 'Health' },
{ name: 'Herbal Tea', price: 'AED 30', image: 'herbal_tea.jpg', category: 'Health' },
{ name: 'Multivitamins', price: 'AED 50', image: 'multivitamins.jpg', category: 'Health' },
{ name: 'Eye Drops', price: 'AED 18', image: 'eye_drops.jpg', category: 'Health' },
{ name: 'Antiseptic Cream', price: 'AED 15', image: 'antiseptic_cream.jpg', category: 'Health' },
{ name: 'ORS Sachets', price: 'AED 12', image: 'ors_sachets.jpg', category: 'Health' },
{ name: 'Inhaler', price: 'AED 48', image: 'inhaler.jpg', category: 'Health' },
{ name: 'Pain Relief Spray', price: 'AED 35', image: 'pain_relief_spray.jpg', category: 'Health' },
{ name: 'Sleep Aid Supplements', price: 'AED 55', image: 'sleep_aid_supplements.jpg', category: 'Health' },
{ name: 'Bandages', price: 'AED 10', image: 'bandages.jpg', category: 'Health' },

// Household
{ name: 'Dishwashing Liquid', price: 'AED 12', image: 'dishwashing_liquid.jpg', category: 'Household' },
{ name: 'Floor Cleaner', price: 'AED 18', image: 'floor_cleaner.jpg', category: 'Household' },
{ name: 'Broom & Dustpan Set', price: 'AED 28', image: 'broom_dustpan_set.jpg', category: 'Household' },
{ name: 'Microfiber Cloths', price: 'AED 15', image: 'microfiber_cloths.jpg', category: 'Household' },
{ name: 'Trash Bags', price: 'AED 20', image: 'trash_bags.jpg', category: 'Household' },
{ name: 'Laundry Detergent', price: 'AED 30', image: 'laundry_detergent.jpg', category: 'Household' },
{ name: 'Air Freshener', price: 'AED 16', image: 'air_freshener.jpg', category: 'Household' },
{ name: 'Mop Bucket Set', price: 'AED 75', image: 'mop_bucket_set.jpg', category: 'Household' },
{ name: 'Storage Boxes', price: 'AED 40', image: 'storage_boxes.jpg', category: 'Household' },
{ name: 'Water Filter Pitcher', price: 'AED 100', image: 'water_filter_pitcher.jpg', category: 'Household' },
{ name: 'Ironing Board', price: 'AED 95', image: 'ironing_board.jpg', category: 'Household' },
{ name: 'Light Bulbs', price: 'AED 12', image: 'light_bulbs.jpg', category: 'Household' },
{ name: 'Clothes Hangers', price: 'AED 22', image: 'clothes_hangers.jpg', category: 'Household' },
{ name: 'Extension Cord', price: 'AED 30', image: 'extension_cord.jpg', category: 'Household' },
{ name: 'Electric Kettle', price: 'AED 80', image: 'electric_kettle.jpg', category: 'Household' },
{ name: 'Table Fan', price: 'AED 130', image: 'table_fan.jpg', category: 'Household' },
{ name: 'Door Mat', price: 'AED 25', image: 'door_mat.jpg', category: 'Household' },
{ name: 'Wall Hooks', price: 'AED 15', image: 'wall_hooks.jpg', category: 'Household' },
{ name: 'Room Heater', price: 'AED 180', image: 'room_heater.jpg', category: 'Household' },
{ name: 'Electric Insect Killer', price: 'AED 140', image: 'electric_insect_killer.jpg', category: 'Household' },

// Fashion
{ name: 'Casual T-Shirts', price: 'AED 50', image: 'casual_tshirts.jpg', category: 'Fashion' },
{ name: 'Jeans', price: 'AED 90', image: 'jeans.jpg', category: 'Fashion' },
{ name: 'Hoodies', price: 'AED 120', image: 'hoodies.jpg', category: 'Fashion' },
{ name: 'Sunglasses', price: 'AED 70', image: 'sunglasses.jpg', category: 'Fashion' },
{ name: 'Watches', price: 'AED 200', image: 'watches.jpg', category: 'Fashion' },
{ name: 'Sneakers', price: 'AED 180', image: 'sneakers.jpg', category: 'Fashion' },
{ name: 'Belts', price: 'AED 35', image: 'belts.jpg', category: 'Fashion' },
{ name: 'Leather Wallets', price: 'AED 60', image: 'leather_wallets.jpg', category: 'Fashion' },
{ name: 'Handbags', price: 'AED 110', image: 'handbags.jpg', category: 'Fashion' },
{ name: 'Formal Shirts', price: 'AED 85', image: 'formal_shirts.jpg', category: 'Fashion' },
{ name: 'Kurti Tops', price: 'AED 65', image: 'kurti_tops.jpg', category: 'Fashion' },
{ name: 'Maxi Dresses', price: 'AED 120', image: 'maxi_dresses.jpg', category: 'Fashion' },
{ name: 'Sports Shoes', price: 'AED 150', image: 'sports_shoes.jpg', category: 'Fashion' },
{ name: 'Beanies', price: 'AED 30', image: 'beanies.jpg', category: 'Fashion' },
{ name: 'Jackets', price: 'AED 200', image: 'jackets.jpg', category: 'Fashion' },
{ name: 'Bracelets', price: 'AED 40', image: 'bracelets.jpg', category: 'Fashion' },
{ name: 'Ankle Boots', price: 'AED 170', image: 'ankle_boots.jpg', category: 'Fashion' },
{ name: 'Caps', price: 'AED 25', image: 'caps.jpg', category: 'Fashion' },
{ name: 'Socks (Pack)', price: 'AED 20', image: 'socks_pack.jpg', category: 'Fashion' },
{ name: 'Scarves', price: 'AED 45', image: 'scarves.jpg', category: 'Fashion' },

  ]

  countryCodes = [
    { code: '+971', name: 'UAE' },
    { code: '+91', name: 'India' },
    { code: '+1', name: 'USA' },
    { code: '+44', name: 'UK' },
    { code: '+61', name: 'Australia' },
  ];

  selectedCategory: string = 'All';
  isFormOpen = false;
  selectedProduct: any = null;
  orderId: string | null = null;
  showOrderIdOnly = false;

 customer: Customer = {
  countryCode: '+971',
  mobile: '',
  name: '',
  email: '',
  shippingAddress: '',
  nearbyLandmark: '',
  address: ''
};
  get uniqueCategories() {
    const categories = this.products.map(p => p.category);
    return ['All', ...Array.from(new Set(categories))];
  }

  get filteredProducts() {
    return this.selectedCategory === 'All'
      ? this.products
      : this.products.filter(p => p.category === this.selectedCategory);
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
  }

  openForm(product: any) {
    this.selectedProduct = product;
    this.orderId = this.generateOrderId();
    this.isFormOpen = true;
    this.showOrderIdOnly = false;
    this.resetCustomer();
  }

resetCustomer() {
  this.customer = {
    countryCode: '+971',
    mobile: '',
    name: '',
    email: '',
    shippingAddress: '',
    nearbyLandmark: '',
    address: ''
  };
}

  closeForm() {
    this.isFormOpen = false;
  }

  generateOrderId(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

 submitForm() {
  const nameValid = this.customer.name.trim().length > 0;
  const mobileValid = /^[0-9]{6,15}$/.test(this.customer.mobile.trim());
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.customer.email.trim());
  const addressValid = this.customer.shippingAddress.trim().length > 0;
  const landmarkValid = this.customer.nearbyLandmark.trim().length > 0;

  if (nameValid && mobileValid && emailValid && addressValid && landmarkValid) {
    this.isFormOpen = false;
    this.showOrderIdOnly = true;
    console.log('Form submitted successfully:', this.customer);
  } else {
    alert('❗ Please fill all fields correctly including address and landmark.');
  }
}
allowOnlyDigits(event: KeyboardEvent | InputEvent) {
  const isKeyboardEvent = 'key' in event;

  if (isKeyboardEvent) {
    const keyEvent = event as KeyboardEvent;
    const charCode = keyEvent.charCode || keyEvent.keyCode;
    if (charCode < 48 || charCode > 57) {
      keyEvent.preventDefault();
    }
  } else {
    const inputEvent = event as InputEvent;
    const inputValue = (event.target as HTMLInputElement).value;
    if (/[^0-9]/.test(inputValue)) {
      (event.target as HTMLInputElement).value = inputValue.replace(/[^0-9]/g, '');
    }
  }
}
}

