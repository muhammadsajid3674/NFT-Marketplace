const {
   PaintBrush,
   Swatches,
   MusicNotes,
   Camera,
   VideoCamera,
   MagicWand,
   Basketball,
   Planet,
} = require("../icon");
const {
   Category2,
   Category1,
   Category3,
   Category4,
   Category5,
   Category6,
   Category7,
   Category8,
} = require("../img");

exports.categories = [
   {
      bg: Category1,
      title: "Art",
      icon: PaintBrush,
   },
   {
      bg: Category2,
      title: "Collectibles",
      icon: Swatches,
   },
   {
      bg: Category3,
      title: "Music",
      icon: MusicNotes,
   },
   {
      bg: Category4,
      title: "Photography",
      icon: Camera,
   },
   {
      bg: Category5,
      title: "Video",
      icon: VideoCamera,
   },
   {
      bg: Category6,
      title: "Utility",
      icon: MagicWand,
   },
   {
      bg: Category7,
      title: "Sport",
      icon: Basketball,
   },
   {
      bg: Category8,
      title: "Virtual Worlds",
      icon: Planet,
   },
];
