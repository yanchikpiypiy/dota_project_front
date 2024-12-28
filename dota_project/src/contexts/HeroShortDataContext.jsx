import { createContext } from 'react';
import HeroDota from "../public/hero_official_stats.json"
import HeroData2 from "../public/final_hero.json"
import HeroAbilityList from "../public/dota2_official_abilities.json"
import { useParams } from 'react-router-dom';
export const HeroDotaContext = createContext({
    name: "",
    short_desc: "",
    long_desc: "",
    main_attr: "",
    complexity: 0,
    abilities: []
})


export default function HeroDotaContextProvider({children}){
    const { heroName } = useParams();
    const data = HeroDota.find(hero => hero.name.toLowerCase() === heroName.toLowerCase())
    const data2 = HeroData2.find(hero => hero.name.toLowerCase() === heroName.toLowerCase())
    const data3 = HeroAbilityList.find(hero => hero.hero_name.toLowerCase() === heroName.toLowerCase())
    const HeroFilteredData = {
        name: data.name,
        short_desc: data2.short_desc,
        long_desc: data2.long_desc,
        main_attr: data2.primary_attribute,
        complexity: data.complexity,
        abilities: data3.abilities
    }
    return (
        <HeroDotaContext.Provider value={HeroFilteredData}>
            {children}
        </HeroDotaContext.Provider>
    );
    
}