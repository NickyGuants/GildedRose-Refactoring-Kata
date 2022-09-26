import { Item, GildedRose } from '@/gilded-rose-refactored';

describe('Update quality', () => {
  describe('Normal Item', () => {
    it('Should decrease quality and sell in by 1 when sell in > 0', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 10, 10)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(9);
      expect(item.sellIn).toBe(9);
      const [item1] = gildedRose.updateQuality();
      expect(item1.quality).toBe(8);
      expect(item.sellIn).toBe(8);
    });

    it('Should decrease quality by 2 and sell in by 1 when sellin is less than 0', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', -1, 10)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(8);
      expect(item.sellIn).toBe(-2);
    });

    it('Should decrease quality by 2 and sell in by 1 wehn sellin is less than 0 ', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', -1, 0)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(0);
      expect(item.sellIn).toBe(-2);
    });
  });

  describe('Aged Brie', () => {
    it('Should increase quality by 1 and decrease sell in by 1', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 5)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(6);
      expect(item.sellIn).toBe(0);
    });

    it('Should increase quality by 1 and decrease sell in by 1', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', -11, 10)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(11);
      expect(item.sellIn).toBe(-12);
    });

  });

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('Should increase quality by 1 and decrease sellin by 1', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(21);
      expect(item.sellIn).toBe(19);
      const [item1] = gildedRose.updateQuality();
      expect(item1.quality).toBe(22);
      expect(item.sellIn).toBe(18);
    });
    
    it('Should increase quality by 2 and decrease sellin by 1 when sellin is 10 or less', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(12);
      expect(item.sellIn).toBe(9);
    });

    it('Should increase quality by 3 and decrease sellin by 1 when sellin is 5 or less', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(13);
      expect(item.sellIn).toBe(4);
    });

    it('Should set Quality to 0 when sellin is less than 0', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(0);
      expect(item.sellIn).toBe(-2);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('Quality should remain the same and sell in the same', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 50, 80)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(80);
      expect(item.sellIn).toBe(50);
    });
  });

  describe('Conjured Items', () => {
    it('Quality should decrease by 2 and sell in should decrease by 1', () => {
      const gildedRose = new GildedRose([new Item('Conjured Items', 10, 10)]);
      const [item] = gildedRose.updateQuality();
      expect(item.quality).toBe(8);
      expect(item.sellIn).toBe(9);
    });
  })
});