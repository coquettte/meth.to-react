import { useParams } from 'react-router-dom';
import RecipeLayout from '../components/RecipeLayout';

const recipes = {
    1: {
        title: "Making Methamphetamine at home",
        description: "Perfect for any occasion",
        prepTime: "30 mins",
        cookTime: "1 hour",
        totalTime: "1 hour 30 mins",
        ingredients: [
            { name: "Diluted HCl - also called Muriatic acid - can be obtained from hardware stores, in the pool section", amount: "" },
            { name: "NaOH - also called lye", amount: "" },
            { name: "Ethyl Ether - aka Diethyl Ether - Et-0-Et - can be obtained from engine starting fluid, usually from a large supermarket. Look for one that says 'high ethyl ether content', such as Prestone", amount: "" },
            { name: "Ephedrine - Modern Vicks nasal inhalers no longer contain ephedrine (ephed) or pseudoephedrine (pfed), but both can be sourced elsewhere. Pure ephedrine can be extracted from certain plants available at garden stores, while pseudoephedrine can be obtained from decongestant pills like Sudafed. Most prefer working with pseudoephedrine from pills due to ease of use. Ensuring purity is critical, as contaminants can disrupt the molar ratio or compromise the product during processing. Look for pills with pseudoephedrine hydrochloride (HCl) as the sole active ingredient and minimal inactive binders. Avoid pills with red coatings, excessive cellulose, wax, or povidone. Smaller pills with the same active ingredient content are generally better due to fewer binders. Time-release formulations are less suitable as they often gel during the cleaning stage. Pure pseudoephedrine or ephedrine is essential for successful use or further processing.", amount: "" },
            { name: "Distilled water - it's really cheap, so you have no reason to use the nasty stuff from the tap. Do things right.", amount: "" },
            { name: "A glass eyedropper", amount: "" },
            { name: "A Pyrex dish (the meatloaf one is suggested)", amount: "" },
            { name: "A glass quart jar", amount: "" },
            { name: "Sharp scissors", amount: "" },
            { name: "Clean rubber gloves", amount: "" },
            { name: "Coffee filters", amount: "" },
            { name: "A measuring cup", amount: "" },
            { name: "Measuring spoons", amount: "" },
        ],
        steps: [
            {
                title: "Preparing ethyl ether",
                content:
                    "WARNING: Ethyl Ether is very flammable and is heavier than air. Do not use ethyl ether near flame or non-sparkless motors. It is also an anaesthetic and can cause respiratory collapse if you inhale too much. Take the unmarked small bottle and spray starter fluid in it until it looks half-full. Then fill the rest of the way with water, cap the bottle and shake for 5 minutes. Let it sit for a minute or two, and tap the side to try and separate the clear upper layer. Then, draw off the top (ether) layer with the eyedropper, and throw away the lower (water) and cloudy layer. Place the ether in the marked container. Repeat this until you have about 1.5 oz. of ether. Put the cap on it, and put it in the freezer if you can. Rinse the other bottle and let it stand. Ethyl ether is very pungent. Even a small evaporated amount is quite noticeable. Ephedrine & or P-Ephedrine: Please discuss this on the neonjoint forum.",
            },
            {
                title: "Ether extraction",
                content:
                    "Pour 1/8 teaspoon of the lye crystals into the bottle of ephedrine and agitate. Do this carefully, as the mixture will become hot, and give off hydrogen gas and/or steam. H2 gas is explosive and lighter than air, avoid any flames as usual. Repeat this step until the mixture remains cloudy. This step neutralizes the HCl in the salt, leaving the insoluble free base (l-desoxyephedrine) again. Why do we do this? So that we can get rid of any water-soluble impurities. For 3 oz. bottles, this should take only 3 repetitions or so.",
            },
            {
                title: "Solvent extraction with agitation",
                content:
                    "Fill the bottle from step 5 up the rest of the way with ethyl ether. Cap the bottle, and agitate for about 8 minutes. It is very important to expose every molecule of the free-base to the ether for as long as possible. This will cause the free base to dissolve into the ether (it -is- soluble in ether).",
            },
            {
                title: "Phase seperation",
                content:
                    "Let the mixture settle. There will be a middle layer that is very thick. Tap the side of the bottle to get this layer as thin as possible. This is why this bottle should be clear.",
            },
            {
                title: "Layer seperation",
                content: "Remove the top (ether) layer with the eyedropper, being careful not to get any of the middle layer in it. Place the removed ether layer into a third bottle."
            },
            {
                title: "Aqueous extraction",
                content: "Add to the third bottle enough water to fill it half-way and about 5 drops of muriatic acid. Cap it. Shake the bottle for 2 minutes. When it settles, remove the top layer and throw it away. The free base has now been bonded to the HCl again, forming a water soluble salt. This time, we're getting rid of ether-soluble impurities. Make sure to get rid of all the ether before going to step 11!"
            },
            {
                title: "Iterative extraction",
                content: "If there is anything left from step 3, repeat the procedure with it."
            },
            {
                title: "Solvent evaporation",
                content: "Evaporate the solution in the Pyrex dish on low heat. You can do this on the stove or nuke it in the microwave (be careful of splashing), but I have found that if you leave it on top of a hot-water heater (like the one that supplies hot water to your house) for about 2-3 days, the remaining crystals will be ephedrine HCl."
            },
            {
                title: "Controlled solvent evaporation",
                content: "If you microwave it, I suggest no more than 5-10s at one time. If it starts 'popping', that means you have too little liquid left to microwave. You can put it under a bright (100W) lamp instead. Microwaving can result in uneven heating, anyway."
            },
            {
                title: "Making methamphetamine by reducing ephedrine",
                content: "Items needed: Alot of matchbooks (the kind with the striking pad), Coffee filters (or filter paper), Something that measures ml and grams, A flask (a small pot with a lid can be used), iodine, Hydroiodic Acid (I will tell you how to make this), Red Phosphorus (I will tell you how to make this), Lye and *Optionally (toluene and HCI gas)"
            },
            {
                title: "Making red phosphorus",
                content: "The striking pad on books of matches is about 50% red phosphorus. The determined experimenter could obtain a pile of red phosphorus by scraping off the striking pads of matchbooks with a sharp knife. A typical composition of the striking pad is about 50% red phosphorus, along with about 30% antimony sulfide, and lesser amounts of glue, iron oxide, MnO2, and glass powder. I don't think these contaminants will seriously interfere with the reaction. Naturally, it is a tedious process to get large amounts of red phosphorus by scraping the striking pads off matchbooks, but who cares?"
            },
            {
                title: "Making hydroiodic acid",
                content: "This is made by mixing iodine and red phosphorus. When making hydroiodic acid from iodine and red phosphorus, the acid is prepared first, and allowed to come to complete reaction for 20 minutes before adding the ephedrine to it. The way around the roadblock here is to just boil off some more of the water from the ephedrine extract, and make the acid mixture in fresh pure water. Since the production of HI from iodine and red phosphorus gives off a good deal of heat, it is wise to chill the mixture in ice, and slowly add the iodine crystals to the red phosphorus-water mixture."
            },
            {
                title: "Making the reaction",
                content: "To do the reaction, a 1000 ml round bottom flask is filled with 150 grams of ephedrine. Also added to the flask are 40 grams of red phosphorus and 340 ml of 47% hydroiodic acid. This same acid and red phosphorus mixture can be prepared from adding 150 grams of iodine crystals to 150 grams of red phosphorus in 300 ml of water. This should produce the strong hydroiodic acid solution needed. Exactly how strong the acid needs to be, I can't say . With the ingredients mixed together in the flask, a condenser is attached to the flask, and the mixture is boiled for one day. This length of time is needed for best yields and highest octane numbers on the product. While it is cooking, the mixture is quite red and messy looking from the red phosphorus floating around in it.When one day of boiling under reflux is up, the flask is allowed to cool, then it is diluted with an equal volume of water. Next, the red phosphorus is filtered out. A series of doubled up coffee filters will work to get out all the red phosphorus, but real filter paper is better. The filtered solution should look a golden color. A red color may indicate that all the red phosphorus is not yet out. If so, it is filtered again. The filtered-out phosphorus can be saved for use in the next batch. If filtering does not remove the red color, there may be iodine floating around the solution. It can be removed by adding a few dashes of sodium bisulfate or sodium thiosulfate.The next step in processing the batch is to neutralize the acid. A strong lye solution is mixed up and added to the batch while shaking until the batch is strongly basic. This brings the meth out as liquid free base floating on top of the water. The strongly basic solution is shaken vigorously to ensure that all the meth has been converted to the free base. You now can sell or use the free base for injection use or with free base meth now obtained, the next step you can do is to form the crystalline hydrochloride salt of meth. To do this, a few hundred mls of toluene is added to the batch, and the meth free base extracted out as usual. If the chemist's cooking has been careful, the color of the toluene extract will be clear to pale yellow. If this is the case, the product is sufficiently pure to make nice white crystals just by bubbling dry HCl gas through the toluene extract. If the toluene extract is darker colored, a distillation is called for to get pure meth free base. The yield of pure methamphetamine hydrochloride should be from 100 to 110 grams."
            },
        ],
    },
    2: {
        title: "Improvised C-4",
        description: "Metro boomin make it boom",
        prepTime: "10 mins",
        cookTime: "20 mins",
        totalTime: "30 mins",
        ingredients: [
            { name: "Ammonium Nitrate fertilizer 34-0-0", amount: "" },
            { name: "Nitromethane", amount: "" },
            { name: "Denatured Ethyl Alcohol", amount: "" },
        ],
        steps: [
            {
                title: "Obtain Ammonium Nitrate fertilizer",
                content: "Ammonium Nitrate fertilizer has been dealt with in the section on AN-FO and AN-AL. Nitromethane (CH3NO2) is used as a solvent and more commonly as a fuel additive for drag-racers, remote-control model airplane engines, go-carts and various other high speed engines. The operative should have no trouble obtaining a few gallons of this stuff from the local dragstrip or street racing hangout. A few phone calls should track this stuff down but you may have to pay outrageous chemical supply house prices. Avoid using the small bottles of Nitromethane which are available at hobby stores, these contain only 15%-20% Nitromethane and will not work consistently.",
            },
            {
                title: "Drying and Storing Ammonium Nitrate Safely",
                content: "The first step is to dry the ammonium nitrate and keep it dry. In conditions of high humidity, this will be a difficult task. Fill a 1-pound coffee can with ammonium nitrate and place it in an oven at 150F for three hours. An accurate thermometer is essential for this work as the AN will melt and liquefy at 170F and will explode at 400F. Once the heating cycle is complete, remove the coffee can and put it in two sealed plastic bags. After about two weeks the AN will have re-absorbed too much moisture and the process will have to be repeated.",
            },
            {
                title: "Preparing Ammonium Nitrate and Alcohol Mixture for Evaporation",
                content: "Place about 430 grams of the dried AN into an oven-proof dish. Pour denatured ethyl alcohol over the AN and stir for about 3 minutes. The alcohol will turn a brownish color. Strain the alcohol off and dump the AN back into the dish and heat gently at below 150F until all the alcohol is evaporated.",
            },
            {
                title: "Grinding and Storing Ammonium Nitrate Powder",
                content: "Next, using a mortar and pestle or an electric coffee grinder, grind the AN into talcum powder consistency. It is essential to grind the AN very finely. As soon as the grinding is done it will be necessary to pack the powder into an airtight container. The AN is very deliquescent (moisture-absorbent) at this point so an airtight container is absolutely essential.",
            },
            {
                title: "Mixing Ammonium Nitrate and Nitromethane",
                content: "The safest way to complete the process is to combine the AN and Nitromethane at the blast sight, about 20 minutes prior to use. This may not be possible, of course, but bear in mind that the sooner the C-4 is used after final mixing, the better. Mix 80 milliliters of Nitromethane into the 430 grams of AN. The ratio should be approximately 1/3rd Nitromethane by volume or 2 parts Nitromethane to 5 parts AN by weight. Because of the inconsistencies of civilian market AN and Nitromethane, some trial and error tweaking of the formula may be necessary. Wait about 20 minutes for the Nitromethane to be soaked into the AN. The mixture should have a thick porridge-like consistency (Too much Nitromethane added to the mixture will make it too thin to fire). At this point, the material will be cap sensitive but not shock sensitive. The C-4 will have a shelf life of about 2 weeks maximum, after that it will start to become less sensitive to cap detonation.",
            },
            {
                title: "Molding and Modifying the Mixture",
                content: "The finished product is soft and pliable. It can be put in a plastic bag and molded to fit into or around just about anything. Packing the C-4 into a rigid container will cause it to detonate with a bit more power. Adding about 5%, by weight (about 20 grams), of powdered aluminum to the AN and Nitromethane mixture will increase power further still. Detonate with #6 - #8 blasting cap or improvised equivalent.",
            },
        ],
    },
    3: {
        title: "Semtex",
        description: "Semtex is a powerful explosive that is widely used by terrorists",
        prepTime: "5 mins",
        cookTime: "50 mins",
        totalTime: "55 mins",
        ingredients: [
            { name: "RDX High Explosive", amount: "" },
            { name: "PETN High Explosive", amount: "" },
            { name: "Motor oil, petroleum jelly, or vegetable oil", amount: "" },
            { name: "Mesuring device (cup, spoon, etc)", amount: "" },
            { name: "Wooden dowel or spoon for stirring", amount: "" },
            { name: "Rolling pin", amount: "" },
            { name: "Wooden Board or hard surface", amount: "" },
            { name: "Bowl", amount: "" },
            { name: "Wax paper or plastic wrap", amount: "" },
            { name: "Glass jar with lid", amount: "" },
        ],
        steps: [
            {
                title: "Crushing RDX Crystals to a Fine Powder",
                content: "Place a small amount of RDX crystals on a wooden block or hard countertop. Using a rolling pin, crush the crystals into a fine powder, having the consistency of flour. CAUTION!!! USE A ROLLING PIN ONLY, NOT A BLOCK OF WOOD!! It is important to crush the crystals rather than using friction between two rubbing surfaces.",
            },
            {
                title: "Powdering RDX and PETN Crystals",
                content: "Repeat process until desired amount of RDX has been powdered. Then, using the same process, powder the same amount of PETN.",
            },
            {
                title: "Mixing RDX and PETN",
                content: "Mix 9 parts (cups, etc.) of RDX and 9 equal parts of PETN in a jar and shake for 5 minutes.",
            },
            {
                title: "Creating a Uniform Paste from RDX/PETN Mixture",
                content: "Pour the RDX/PETN mixture into a bowl of motor oil, petroleum jelly, or vegetable oil. Stir vigorously until a uniform paste is obtained.",
            },
            {
                title: "Molding and Storing Semtex for Later Use",
                content: "Semtex can be used immediately for any task requiring a high explosive. If it is to be stored, however, mold the Semtex into a brick and place it in the middle of a square piece of wax paper or plastic film. Wrap tighly and seal it with rubber bands or adhesive tape to keep the brick airtight.",
            },
            {
                title: "Storing Semtex for Long-Term Preservation",
                content: "Store in a cool, dry place. The explosive should have unlimited shelf life, but it will lose its plastic properties after a while.",
            },
            {
                title: "Note",
                content: "In general, it is always preferable to mix explosives just before use to avoid the problems of and dangers of storage."
            }
        ],
    },
    4: {
        title: "Makeshift flashbang",
        description: "The ultimate flashbang smoothie",
        prepTime: "10 mins",
        cookTime: "10 mins",
        totalTime: "20 mins",
        ingredients: [
            { name: "Powdered magnesium", amount: "2 parts" },
            { name: "Silver nitrate", amount: "1 part" },
            { name: "Water", amount: "" },
        ],
        steps: [
            {
                title: "Mixing Magnesium and Silver Nitrate",
                content: "Put 2 parts of powdered magnesium to 1 of part silver nitrate into a strong clear bag. Double bagging the mixture is recommened. Make sure the powders are fine and very dry. This mixture will react with any contact with water. Make sure that the bag has little extra air in it to be effective.",
            },
            {
                title: "Preparing Water Containment for the Mixture",
                content: "Put a weaker bag filled with water inside of the stronger bag with the mixture. It should hold water without breaking if you hold it, but should break if thrown on the ground. If ANY water leaks on the powder mixture, it will react.",
            },
            {
                title: "Usage",
                content: "Simply throw the bag on the ground to ignite the mixture. It will instantly explode and flash blind anyone not fully covering their eyes. Completely cover your eyes when it explodes or it will flash blind you as well.",
            },
        ],
    },
    5: {
        title: "Homemade napalm",
        description: "The Perfect DIY Firestarter",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        ingredients: [
            { name: "Gasoline or Diesel", amount: "" },
            { name: "Styrofoam", amount: "" },
            { name: "Optional: Engine oil", amount: "" },

        ],
        steps: [
            {
                title: "Filling Container with Gasoline",
                content: "Fill a large container about half-way with gasoline (diesel works best).",
            },
            {
                title: "Breaking Styrofoam Plate into Small Pieces",
                content: "Break a Styrofoam (polystyrene) plate into small pieces.",
            },
            {
                title: "Adding Styrofoam to Gasoline Mixture",
                content: "Add the pieces to the gasoline mixture and stir.",
            },
            {
                title: "Dissolving Styrofoam in Gasoline",
                content: "The gasoline will dissolve the Styrofoam into a jelly-like substance.",
            },
            {
                title: "Straining Excess Gasoline to Leave the Napalm",
                content: "Pour out the extra gasoline leaving the white, jelly-like substance. This sticky, white substance is the 'napalm' which when lit, will burn for several minutes.",
            },
            {
                title: "Optional",
                content: "Engine oil can be added to the mixture to reduce (slow) the burn time of the substance.",
            },
        ],
    },
    6: {
        title: "Quick money method",
        description: "Catalytic converter theft",
        prepTime: "10 mins",
        cookTime: "5 mins",
        totalTime: "15 mins",
        ingredients: [
            { name: "A saw", amount: "" },
        ],
        steps: [
            {
                title: "Steal the catalytic converter",
                content: "Get under a car and cut the converter out.",
            },
            {
                title: "Selling Platinum",
                content: "The average catalytic converter has around 3-7 grams of platinum in it, and 1 gram of platinum sells for $29.07 (USD, current market price).",
            },
            {
                title: "Selling Palladium",
                content: "A converter also contains around 2-7 grams of palladium, which goes for $30.84 per gram (USD, current market price).",
            },
            {
                title: "Selling Rhodium",
                content: "It also has around 1-2 grams of Rhodium, which sells for $145.48 per gram (USD, current market price).",
            },
            {
                title: "Conclusion",
                content: "At minimum you'll make $294.37 USD per car and at maximum you'll make $737.33 USD per car",
            },
        ],
    },
};

export default function RecipePage() {
    const { id } = useParams<{ id: string }>();
    const recipeId = id ? parseInt(id, 10) : null;
    const recipe = recipeId && (recipeId === 1 || recipeId === 2 || recipeId === 3 || recipeId === 4 || recipeId === 5 || recipeId === 6) ? recipes[recipeId] : null;

    if (!recipe || !recipeId) {
        return <div>Recipe not found</div>;
    }

    return <RecipeLayout {...recipe} />;
}

