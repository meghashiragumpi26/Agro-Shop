import React from 'react'
import logo from "../Assets/Orgnic.jpg"
import main from "../Assets/main2.jpg"

const Home = () => {
  return (
    <div>
      <div className='container-fluid mt-1'>
        <div className='row'>
            
            <p><img src={main} style={{width:"100%",height:"300px"}} alt='Not Found'/></p>
        </div>
     </div>

     <div className='container-fluid bg-light mt-3 p-3'>
        <div className='row'>

          <div className='col-lg-6'>
            <h1> About Agro Shop </h1>
            <hr></hr>
            <h5> Seeling Only Organic Agro Products</h5>
            <p style={{textAlign:"justify"}}> Organic farming is agriculture that makes healthy food, healthy soils, 
              healthy plants, and healthy environments a priority, along with crop 
              productivity. Organic farmers use biological fertilizer inputs and 
              management practices such as cover cropping and crop rotation to improve 
              soil quality and build organic soil matter. By increasing the amount of
               organic matter in the soil, organic farmers enhance the soil’s ability 
               to absorb water, reducing the 
              impacts of drought and flooding. Improving soil organic matter also 
              helps it to absorb and store carbon and other nutrients need to grow 
              healthy crops, which, in turn, are better able to resist insects and 
              diseases.

Organic production systems do not use genetically modified (GM) seed, 
synthetic pesticides or
 fertilizers. Some of the essential characteristics of organic systems 
 include design and implementation of an organic system plan that 
 describes the practices used in producing crops and livestock products; 
 a detailed recordkeeping system that tracks all products from the field to 
 point of sale; and maintenance of buffer zones to prevent inadvertent 
 contamination by synthetic farm chemicals from adjacent conventional fields</p>

 <p style={{textAlign:"justify"}}> The National Organic Program (NOP) develops the rules and regulations for the production, handling, labeling, and enforcement of all USDA organic products. This process, referred to as rulemaking, involves input from the National Organic Standards Board (a Federal Advisory Committee made up of fifteen members of the public) and the public.

The national standard states that organic food must be produced without the use of conventional pesticides, petroleum-based fertilizers, sewage-sludge-based fertilizers, herbicides, genetic enginerring (biotechnology), antibiotics, growth hormones, or irradiation. Animals raised on an organic operation must meet animal health welfare standards, not be fed antibiotics or growth hormones, be fed 100% organic feed, and must be provided access to the outdoors.* Land must have no prohibited substances applied to it for at least three years before the harvest of an organic crop. The NOP states that all farms, ranches, and handling operations that display the “USDA Organic” seal must be certified organic by the state or by a private agency, accredited by the USDA, to ensure the NOP standards are followed.

To gain organic certification, a farmer (of cropland, pasture or livestock) submits an organic system plan to an accredited certifier each year. This documents how the farmer adheres to NOP standards. Certified organic farms and processing facilities undergo annual inspections to verify that they are meeting the standards. Organic inspectors examine all elements of a farm operation for adherence to the standards and verfiy that the farm is being managed according to the farmer’s organic system plan.</p>
          </div>

          <div className='col-lg-6'>
            <h1> Agro Product Benefits?</h1>
            <hr></hr>
            <p style={{textAlign:'justify'}}>
            <h6><i class="fa fa-arrows" style={{fontSize:"16px"}}></i>   Maintain and improve fertility, soil structure and biodiversity, and reduce erosion.</h6>
             <h6><i class="fa fa-arrows" style={{fontSize:"16px"}}></i>  Reduce the risks of human, animal, and environmental exposure to toxic materials.</h6>
             <h6><i class="fa fa-arrows" style={{fontSize:"16px"}}></i>  Fine-tune farming practices to meet local production conditions and satisfy local markets</h6>
            </p>

            <p className='mt-3'> <img src={logo} style={{width:"100%",height:"200px;"}} alt='not found'/></p>
          </div>
            
        </div>
     </div>
    </div>
  )
}

export default Home
