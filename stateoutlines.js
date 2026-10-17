// npm i us-atlas topojson-client d3-geo
import {feature} from "topojson-client";
import {geoPath} from "d3-geo";
import topo from "us-atlas/states-albers-10m.json" with {type: "json"};

const path = geoPath().digits(1);   // 1 decimal keeps the output small
const out = {};
for (const f of feature(topo, topo.objects.states).features) out[f.id] = path(f);
console.log(JSON.stringify(out));
