"use client";
import Image from "next/image";
import { useState } from "react";

const CustomTabPanel = ({ children, value, index, ...other }) => (
   <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className='py-4 px-32 rounded-lg'
      {...other}
   >
      {value === index && <div className='p-3'>{children}</div>}
   </div>
);

const a11yProps = (index) => ({
   id: `tab-${index}`,
   "aria-controls": `tabpanel-${index}`,
});

const Tabs = ({ tabs = [], panel, theme, count, component: Component }) => {
   const [value, setValue] = useState(0);
   const handleClick = (event, newValue) => setValue(newValue);
   return (
      <>
         <div>
            <ul className='flex-center -mb-px text-sm font-medium text-center px-32'>
               {tabs.length > 0 &&
                  tabs.map((e, i) => (
                     <li className='flex-1 w-64 mr-2' key={i}>
                        <button
                           className={`w-full inline-block p-4 text-xl rounded-t-lg border-dimCaption hover:text-dimCaption ${
                              value === i ? "border-b-4" : "border-0"
                           }`}
                           onClick={(e) => handleClick(e, i)}
                           {...a11yProps(i)}
                        >
                           {e}
                           {count && (
                              <div className='bg-dimCaption inline-block w-10 p-1 rounded-2xl ml-5 hover:text-white'>
                                 <small className='font-semibold'>
                                    {panel[i].length}
                                 </small>
                              </div>
                           )}
                        </button>
                     </li>
                  ))}
            </ul>
         </div>
         <div className={theme}>
            {panel.length > 0 &&
               panel.map((e, i) => (
                  <CustomTabPanel value={value} index={i} key={i}>
                     <div className='grid grid-cols-12 gap-5'>
                        <Component data={e} />
                     </div>
                  </CustomTabPanel>
               ))}
         </div>
      </>
   );
};

export default Tabs;
