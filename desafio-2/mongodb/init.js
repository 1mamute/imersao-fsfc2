print(
  "Start #################################################################"
);

db = db.getSiblingDB("local");

db.createCollection("routes");

db.routes.insertMany([
  {
    _id: "1",
    title: "Primeiro",
    startPos: { lat: -15.82594, lng: -47.92923 },
    endPos: { lat: -15.82942, lng: -47.92765 },
  },
  {
    _id: "2",
    title: "Segundo",
    startPos: { lat: -15.82449, lng: -47.92756 },
    endPos: { lat: -15.8276, lng: -47.92621 },
  },
  {
    _id: "3",
    title: "Terceiro",
    startPos: { lat: -16.82331, lng: -47.92588 },
    endPos: { lat: -16.82758, lng: -47.92532 },
  },
  {
    _id: "4",
    title: "Quarto",
    startPos: { lat: -15.82331, lng: -47.92588 },
    endPos: { lat: -15.82758, lng: -47.92532 },
  },
  {
    _id: "5",
    title: "Quinta",
    startPos: { lat: -15.82331, lng: -49.92588 },
    endPos: { lat: -15.82758, lng: -49.92532 },
  },
]);

print("END #################################################################");
