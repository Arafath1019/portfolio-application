import React, {useState} from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const {portfolioData} = useSelector(state => state.root);
    const { projects} = portfolioData;
  return (
    <div>
        <SectionTitle title="Projects" />
        <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => {
            return (
              <div
                onClick={() => setSelectedItemIndex(index)}
                className="cursor-pointer"
              >
                <h1
                  className={`text-xl px-5 ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                      : "text-white"
                  }`}
                >
                  {project.title}
                </h1>
              </div>
            );
          })}
        </div>
        <div>
          {projects.map((project, index) => {
            return (
              <>
                {selectedItemIndex === index && (
                  <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    <img src={project.image} alt="" className='h-60 w-72'/>
                    <div className="flex flex-col gap-5">
                    <h1 className="text-secondary text-xl">
                      {project.title}
                    </h1>
                    <p className="text-white">
                      {project.description}
                    </p>
                    <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects