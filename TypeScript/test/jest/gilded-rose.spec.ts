import { Item, GildedRose, CustomItem, AgedBrie, BackstageItem, ConjuredItem, LegendaryItem} from '@/gilded-rose-refactored';

describe('Update quality', () => {
  //Individual Items Tests
  describe('Custom Item', () => {
    it('Should decrease quality and sell in by 1 when sell in > 0', () => {
      const customItem = new CustomItem('Normal Item', 10, 10);
      const item = customItem.updateQuality();
      expect(item.quality).toBe(9);
      expect(item.sellIn).toBe(9);
      const item1 = customItem.updateQuality();
      expect(item1.quality).toBe(8);
      expect(item1.sellIn).toBe(8);
    });

    it('Should decrease quality by 2 and sell in by 1 when sellin is less than 0', () => {
      const customItem = new CustomItem('Normal Item', -1, 10);
      const item = customItem.updateQuality();
      expect(item.quality).toBe(8);
      expect(item.sellIn).toBe(-2);
    });

    it('Should decrease quality by 2 and sell in by 1 wehn sellin is less than 0 ', () => {
      const customItem = new CustomItem('Normal Item', -1, 0);
      const item = customItem.updateQuality();
      expect(item.quality).toBe(0);
      expect(item.sellIn).toBe(-2);
    });
  });

  describe('Aged Brie', () => {
    it('Should increase quality by 1 and decrease sell in by 1', () => {
      const agedBrie = new AgedBrie('Aged Brie', 1, 5);
      const agedBrieItem = agedBrie.updateQuality();
      expect(agedBrieItem.quality).toBe(6);
      expect(agedBrieItem.sellIn).toBe(0);
    });

    it('Should increase quality by 1 and decrease sell in by 1', () => {
      const agedBrie = new AgedBrie('Aged Brie', -11, 10);
      const agedBrieItem = agedBrie.updateQuality();
      expect(agedBrieItem.quality).toBe(11);
      expect(agedBrieItem.sellIn).toBe(-12);
    });

  });

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('Should increase quality by 1 and decrease sellin by 1', () => {
      const backstageItem = new BackstageItem('Backstage passes to a TAFKAL80ETC concert', 20, 20);
      const item = backstageItem.updateQuality();
      expect(item.quality).toBe(21);
      expect(item.sellIn).toBe(19);
      const item1 = backstageItem.updateQuality();
      expect(item1.quality).toBe(22);
      expect(item1.sellIn).toBe(18);
    });
    
    it('Should increase quality by 2 and decrease sellin by 1 when sellin is 10 or less', () => {
      const backstageItem = new BackstageItem('Backstage passes to a TAFKAL80ETC concert', 10, 10);
      const item = backstageItem.updateQuality();
      expect(item.quality).toBe(12);
      expect(item.sellIn).toBe(9);
    });

    it('Should increase quality by 3 and decrease sellin by 1 when sellin is 5 or less', () => {
      const backstageItem = new BackstageItem('Backstage passes to a TAFKAL80ETC concert', 5, 10);
      const item = backstageItem.updateQuality();
      expect(item.quality).toBe(13);
      expect(item.sellIn).toBe(4);
    });

    it('Should set Quality to 0 when sellin is less than 0', () => {
      const backstageItem = new BackstageItem('Backstage passes to a TAFKAL80ETC concert', -1, 10);
      const item = backstageItem.updateQuality();
      expect(item.quality).toBe(0);
      expect(item.sellIn).toBe(-2);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('Quality should remain the same and sell in the same', () => {
      const legendaryItem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 50, 80);
      const item = legendaryItem.updateQuality();
      expect(item.quality).toBe(80);
      expect(item.sellIn).toBe(50);
    });
  });

  describe('Conjured Items', () => {
    it('Quality should decrease by 2 and sell in should decrease by 1', () => {
      const conjuredItem = new ConjuredItem('Conjured Items', 10, 10);
      const item = conjuredItem.updateQuality();
      expect(item.quality).toBe(8);
      expect(item.sellIn).toBe(9);
    });
  })
});