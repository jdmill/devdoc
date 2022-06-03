import './stylePlayground.css';
import hero from '../css/testhero.jpg';

import UserHeader from '../userHeaders/userHeaders';
import UserFooter from '../userFooters/userFooters';
import UserArticle from '../userAtricles/UserArticles';

function Playground() {

    const puppyPhoto ="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg";

    return (
        <div className="full__screen">
        <UserHeader theme="elegant" title="Elegant" photo={ hero }/>
        <UserArticle
            theme="elegant"
            title="Adopt Puppies"
            text={`Amy Ockelford, a spokesperson for the RSPCA, tells Country Living they do not advise giving pets as presents unless "it is known that the person receiving the pet is willing to take on the responsibility of having a pet".

This includes making sure they can actually afford to keep a pet and give them everything they need to be happy and healthy.

The present-giver should also ensure that the receiver can commit long-term to properly caring for an animal.

"People need to take into account whether they have the time and money to care for that pet for the rest of its life," Ockelford says.`}
            photo={ puppyPhoto }/>
        <UserFooter theme="elegant" title="Created 2022©"/>
        
        <UserHeader theme="Fantasy" title="Fantasy" photo=""/>
        <UserArticle
            theme="Fantasy"
            title="Adopt Puppies"
            text={`Lorebwkb efwbw kfhwebf wbew bewkjwehbwlhbvwea jahwb lewahb 
            ewfewfwe dwe
            
            
             wevwevewfewc`}
            photo={ puppyPhoto }/>
        <UserFooter theme="Fantasy" title="Created 2022©"/>

        <UserHeader theme="Navy" title="Navy" photo=""/>
        <UserFooter theme="Navy" title="Created 2022©"/>

        <UserHeader theme="News" title="News" photo=""/>
        <UserFooter theme="News" title="Created 2022©"/>

        <UserHeader theme="Tech" title="Tech" photo=""/>
        <UserFooter theme="Tech" title="Created 2022©"/>

        <UserHeader theme="Whimsical" title="Whimsical" photo=""/>
        <UserFooter theme="Whimsical" title="Created 2022©"/>
        </div>
    );
};

export default Playground;
