import './stylePlayground.css';
import hero from '../css/testhero.jpg';

import UserHeader from '../userHeaders/userHeaders';
import UserFooter from '../userFooters/userFooters';
import UserArticle from '../userAtricles/UserArticles';
import UserContact from '../userContacts/UserContacts';

function Playground() {

    const puppyPhoto ="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg";

    return (
        <div className="full__screen">
        <UserHeader theme="Elegant" title="Elegant" photo={ hero }/>
        <UserArticle
            theme="Elegant"
            title="Adopt Puppies"
            text={`Amy Ockelford, a spokesperson for the RSPCA, tells Country Living they do not advise giving pets as presents unless "it is known that the person receiving the pet is willing to take on the responsibility of having a pet".

This includes making sure they can actually afford to keep a pet and give them everything they need to be happy and healthy.

The present-giver should also ensure that the receiver can commit long-term to properly caring for an animal.

"People need to take into account whether they have the time and money to care for that pet for the rest of its life," Ockelford says.`}
            photo={ puppyPhoto }
        />
        <UserContact theme="Elegant" title="I want to Adopt a Puppy" text="captainPlanet@pbs.org"/>
        <UserFooter theme="Elegant" title="Created 2022©" text="Made by people"/>
        
        <UserHeader theme="Fantasy" title="Fantasy" photo={ hero }/>
        <UserArticle
            theme="Fantasy"
            title="Adopt Puppies"
            text={`Amy Ockelford, a spokesperson for the RSPCA, tells Country Living they do not advise giving pets as presents unless "it is known that the person receiving the pet is willing to take on the responsibility of having a pet".

This includes making sure they can actually afford to keep a pet and give them everything they need to be happy and healthy.

The present-giver should also ensure that the receiver can commit long-term to properly caring for an animal.

"People need to take into account whether they have the time and money to care for that pet for the rest of its life," Ockelford says.`}
            photo={ puppyPhoto }
        />
        <UserContact theme="Fantasy" title="I want to Adopt a Puppy" text="captainPlanet@pbs.org"/>
        <UserFooter theme="Fantasy" title="Created 2022©" text="Made by people"/>

        <UserHeader theme="Navy" title="Navy" photo={ hero }/>
        <UserArticle
            theme="Navy"
            title="Adopt Puppies"
            text={`Amy Ockelford, a spokesperson for the RSPCA, tells Country Living they do not advise giving pets as presents unless "it is known that the person receiving the pet is willing to take on the responsibility of having a pet".

This includes making sure they can actually afford to keep a pet and give them everything they need to be happy and healthy.

The present-giver should also ensure that the receiver can commit long-term to properly caring for an animal.

"People need to take into account whether they have the time and money to care for that pet for the rest of its life," Ockelford says.`}
            photo={ puppyPhoto }
        />
        <UserContact theme="Navy" title="I want to Adopt a Puppy" text="captainPlanet@pbs.org"/>
        <UserFooter theme="Navy" title="Created 2022©" text="Made by people"/>

        <UserHeader theme="News" title="News" photo={ hero }/>
        <UserArticle
            theme="News"
            title="Adopt Puppies"
            text={`Amy Ockelford, a spokesperson for the RSPCA, tells Country Living they do not advise giving pets as presents unless "it is known that the person receiving the pet is willing to take on the responsibility of having a pet".

            This includes making sure they can actually afford to keep a pet and give them everything they need to be happy and healthy.
            
            The present-giver should also ensure that the receiver can commit long-term to properly caring for an animal.
            
            "People need to take into account whether they have the time and money to care for that pet for the rest of its life," Ockelford says.`}
            photo={ puppyPhoto }
        />
        <UserContact theme="News" title="I want to Adopt a Puppy" text="captainPlanet@pbs.org"/>
        <UserFooter theme="News" title="Created 2022©" text="Made by people"/>

        <UserHeader theme="Tech" title="Tech" photo={ hero }/>
        <UserArticle
            theme="Tech"
            title="Adopt Puppies"
            text={`Amy Ockelford, a spokesperson for the RSPCA, tells Country Living they do not advise giving pets as presents unless "it is known that the person receiving the pet is willing to take on the responsibility of having a pet".

This includes making sure they can actually afford to keep a pet and give them everything they need to be happy and healthy.

The present-giver should also ensure that the receiver can commit long-term to properly caring for an animal.

"People need to take into account whether they have the time and money to care for that pet for the rest of its life," Ockelford says.`}
            photo={ puppyPhoto }
        />
        <UserContact theme="Tech" title="I want to Adopt a Puppy" text="captainPlanet@pbs.org"/>
        <UserFooter theme="Tech" title="Created 2022©" text="Made by people"/>

        <UserHeader theme="Whimsical" title="Whimsical" photo={ hero }/>
        <UserArticle
            theme="Whimsical"
            title="Adopt Puppies"
            text={`Amy Ockelford, a spokesperson for the RSPCA, tells Country Living they do not advise giving pets as presents unless "it is known that the person receiving the pet is willing to take on the responsibility of having a pet".

This includes making sure they can actually afford to keep a pet and give them everything they need to be happy and healthy.

The present-giver should also ensure that the receiver can commit long-term to properly caring for an animal.

"People need to take into account whether they have the time and money to care for that pet for the rest of its life," Ockelford says.`}
            photo={ puppyPhoto }
        />
        <UserContact theme="Whimsical" title="I want to Adopt a Puppy" text="captainPlanet@pbs.org"/>
        <UserFooter theme="Whimsical" title="Created 2022©" text="Made by people"/>
        </div>
    );
};

export default Playground;
