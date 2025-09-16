import './Bento.scss';

import VR from '../../../assets/images/bento/virtual-reality/VR.svg';
import UI from '../../../assets/images/bento/virtual-reality/UI.svg';
import Blender from '../../../assets/images/bento/virtual-reality/Blender.svg';
import Engines from '../../../assets/images/bento/virtual-reality/Engines.svg';
import Pose from '../../../assets/images/bento/virtual-reality/Pose.svg';
import OpenGL from '../../../assets/images/bento/virtual-reality/OpenGL.svg';

import MultiAgent from '../../../assets/images/bento/ai/Multi Agent Systems.svg';
import Optimisation from '../../../assets/images/bento/ai/Optimisation Algorithms.svg';
import RL from '../../../assets/images/bento/ai/Reinforcement Learning.svg';
import Unsupervised from '../../../assets/images/bento/ai/Unsupervised Learning.svg';
import Supervised from '../../../assets/images/bento/ai/Supervised Learning.svg';

export default function Bento() {
    return (
        <div className="Container">
            <div className = "BentoContainer">
                <p className="BentoTitle">Virtual Reality</p>
                <div className="Lines">
                    <div className="Line">
                        <img src={VR} alt="Virtual Reality" className="VR" />
                        <img src={UI} alt="User Interface" className="UI" />
                    </div>
                    <div className="Line2">
                        <img src={Blender} alt="Blender" className="Blender" />
                        <img src={Engines} alt="Engines" className="Engines" />
                    </div>
                    <div className="Line3">
                        <img src={Pose} alt="Augmented Reality" className="Pose" />
                        <img src={OpenGL} alt="OpenGL" className="OpenGL" />
                    </div>
                </div>
            </div>

            <div className = "BentoContainer">
                <p className="BentoTitle">Artificial Intelligence</p>
                <div className="LinesAI">
                    <div className="ColumnsAI">
                        <div className="Column">
                            <div className="LineAI">
                                <img src={MultiAgent} alt="Multi Agent Systems" className="MA" />
                            </div>
                        </div>
                        <div className="Column">
                            <div className="LineAI">
                                <img src={Optimisation} alt="Optimisation Algorithms" className="OA" />
                            </div>
                            <div className="LineAI">
                                <img src={RL} alt="Reinforcement Learning" className="RL" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="Line2AI">
                        <img src={Unsupervised} alt="Unsupervised Learning" className="UL" />
                        <img src={Supervised} alt="Supervised Learning" className="SL" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
