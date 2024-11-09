import './Bento.css';

import VR from '../../../assets/images/bento/VR.svg';
import UI from '../../../assets/images/bento/UI.svg';
import Blender from '../../../assets/images/bento/Blender.svg';
import Engines from '../../../assets/images/bento/Engines.svg';
import Pose from '../../../assets/images/bento/Pose.svg';
import OpenGL from '../../../assets/images/bento/OpenGL.svg';

export default function Bento() {
    return (
        <div className="Container">
            <div className="Lines">
                <div className="Line">
                    <img src={VR} alt="Virtual Reality" className="VR" />
                    <img src={UI} alt="User Interface" className="UI" />
                </div>
                <div className="Line">
                    <img src={Blender} alt="Blender" className="Blender" />
                    <img src={Engines} alt="Engines" className="Engines" />
                </div>
                <div className="Line3">
                    <img src={Pose} alt="Augmented Reality" className="Pose" />
                    <img src={OpenGL} alt="OpenGL" className="OpenGL" />
                </div>
            </div>
        </div>
    );
}
