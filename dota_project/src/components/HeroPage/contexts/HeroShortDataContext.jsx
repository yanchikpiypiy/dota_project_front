import { createContext } from 'react';
import HeroDota from "./improved_dota_hero_stats.json"
import abilitiesData from "./dota2_official_abilities.json"
import { useParams } from 'react-router-dom';
export const HeroDotaContext = createContext({
    data: {},
    abilities: []
})


export default function HeroDotaContextProvider({children}){
    const { heroName } = useParams();
    const data = HeroDota.find(hero => hero.name.toLowerCase() === heroName.toLowerCase())
    const abilities_data = abilitiesData.find(hero => hero.hero_name.toLowerCase() === heroName.toLowerCase())
    const HeroFilteredData = {
        data,
        abilities: abilities_data.abilities
    }
    return (
        <HeroDotaContext.Provider value={HeroFilteredData}>
            {children}
        </HeroDotaContext.Provider>
    );
    
}