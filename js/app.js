var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nicknames: [
      "Voodoo Mama Juju",
      "Prison Mike",
      "Recyclops",
      "Three-Hole Punch Jim"
    ]
  },
  {
    clickCount: 0,
    name: 'Stripes',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nicknames: [
      "Mike",
      "Sully",
      "Boo"
    ]
  },
  {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    nicknames: [
      "T-Bone",
      "Teeth",
      "Biter"
    ]
  },
  {
    clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    nicknames: [
      "Dreamer",
      "Sleepyhead",
      "Snooze",
      "Drool"
    ]
  },
  {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    nicknames: [
      "Darkness",
      "Charlie Murphy"
    ]
  }
];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.levels = ko.observableArray([
    "Newborn",
    "Kitten",
    "Junior",
    "Prime",
    "Mature",
    "Senior",
    "Super",
    "Ultra",
    "Mega",
    "Omega"
  ]);

  this.catLevel = ko.computed(function(){
    if (this.clickCount() < 500){
      return this.levels()[Math.floor(this.clickCount() / 50)];
    }
    else {
      return this.levels()[10];
    }
  }, this);
}

var viewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    return this.clickCount(this.clickCount() + 1);
  };

  this.setCat = function(listedCat) {
    self.catList().forEach(function(catItem){
      if (listedCat.name() === catItem.name()) {
        self.currentCat(catItem);
      }
    });
  };
}

ko.applyBindings(new viewModel());
