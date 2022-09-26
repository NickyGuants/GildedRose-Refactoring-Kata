export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  // Normal Items
  updateCustomItemQuality(item: Item) {
    if (item.quality > 0) {
      if (item.sellIn < 1 && item.quality > 1) {
         item.quality -= 2;
      } else {
        item.quality -= 1;
       }
    }
    item.sellIn = item.sellIn - 1;
    return item;
  }

  //Aged brie items
  updateAgedBrieQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.sellIn = item.sellIn - 1;
    return item;
  }

  //Backstage Items
  updateBackstageQuality(item: Item) {
    if (item.quality < 50) {
      if (item.sellIn < 0) {
        item.quality = item.quality - item.quality;
      } else if (item.sellIn < 6) {
        item.quality = item.quality + 3;
      } else if (item.sellIn < 11) {
        item.quality = item.quality + 2;
      } else {
        item.quality = item.quality + 1;
      }
      item.sellIn = item.sellIn - 1;
    }
    return item;
  }

  //Sulfuras (Legendary items)
  updateLegendaryItemQuality(item: Item) {
    return item;
  }

  //New feature - Conjured Items
  updateConjuredItemQuality(item: Item) {
    if (item.quality > 0) {
       item.quality = item.quality - 2;
    }
    item.sellIn = item.sellIn - 1;
    return item;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let name = this.items[i].name;
      switch (name) {
        case 'Aged Brie':
          this.items[i] = this.updateAgedBrieQuality(this.items[i]);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.items[i] = this.updateBackstageQuality(this.items[i]);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          this.items[i] = this.updateLegendaryItemQuality(this.items[i]);
          break;
        case 'Conjured Items':
          this.items[i] = this.updateConjuredItemQuality(this.items[i]);
          break;
        default:
          this.items[i] = this.updateCustomItemQuality(this.items[i]);
      }
    }
    return this.items;
  }
}
