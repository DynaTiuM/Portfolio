import './Bento.css'

import VR from '../../../../assets/images/bento/VR.svg';
import UI from '../../../../assets/images/bento/UI.svg';
import Blender from '../../../../assets/images/bento/Blender.svg';
import Moteurs from '../../../../assets/images/bento/Engines.svg';
import Pose from '../../../../assets/images/bento/Pose.svg';
import OpenGL from '../../../../assets/images/bento/OpenGL.svg';

export default function Bento() {
    return (
        <div className="Container">
            <div className="Lines">
                <div className="Line">
                    <img src={VR} alt="Virtual Reality" height="235px"/>
                    <img src={UI} alt="User interface" height="224px"/>
                </div>
                <div className="Line">
                    <img src={Blender} alt="Blender" height="191px"/>
                    <img src={Moteurs} alt="Engines" height="217px"/>
                </div>
                <div className="Line3">
                    <img src={Pose} alt="Augmented Reality" height="191px"/>
                    <img src={OpenGL} alt="OpenGL" height="191px"/>
                </div>
            </div>
        </div>
    );


}