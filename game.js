function generateEnemiesForLevel(iLevel)
{

    //calc base
    let iBaseAnimalCount = iLevel * (iLevel + 10); // level 1 = 11 , Level 2 = 24 , Level 3 = 39

    let iProgressionalAnimalCount = iLevel * iLevel; // level 1 = 1 , Level 2 = 2 , Level 3 = 9 , Level 4 = 16

    let iSpecialAnimalCount = 300 + (20 * ( iLevel - 20)); // level 20 = 300 , level 21 = 320 , level 22 = 340

    //no special before level 20
    if(iLevel < 20) iSpecialAnimalCount = 0;

    //loop the base animal count and create them

    //find how many 50 rounds have passed
    let iFiftyRoundsPassed = parseInt(iLevel / 50);

    iFiftyRoundsPassed++; // increment by 1 so first 50 levels are level animals

    for(let i = 0; i < iBaseAnimalCount; i+= iFiftyRoundsPassed)
    {
        
    }




}
