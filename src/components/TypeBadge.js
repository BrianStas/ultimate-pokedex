import React from 'react'

export default function TypeBadge({pokemon}){
const BadgeColor = {
    bug: "bg-green-400 text-gray-800",
    dark: "bg-base-300",
    dragon: "bg-violet-500",
    electric: "badge-warning",
    fairy: "badge-error",
    fighting: "bg-orange-600",
    fire: "bg-error-content",
    flying: "bg-sky-600",
    ghost: "bg-purple-900",
    grass: "bg-success-content",
    ground: "bg-yellow-900",
    ice: "badge-info",
    normal: "badge-neutral",
    poison: "badge-primary",
    psychic: "badge-secondary",
    rock: "badge-warning-content",
    steel: "badge-base-content",
    water: "bg-blue-700"
}

const TypeList = [];

for(let type of pokemon.types){
   TypeList.push( <div className = {`badge ${BadgeColor[type.type.name]}`}>{type.type.name}</div>)
}

return(<div>
{TypeList}</div>)
}

