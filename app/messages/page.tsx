"use client"

export default function Description() {
return (
<section className="relative pt-20 lg:pt-24 pb-20 bg-violet-50 dark:bg-gray-900">
            <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div className="h-24 w-2/3 bg-gradient-to-br from-mainColor-default opacity-50 blur-2xl dark:from-mainColor dark:invisible dark:opacity-40">
                    </div>
                    <div className="h-20 w-3/5 bg-gradient-to-r from-mainColor-default opacity-60 blur-2xl dark:from-mainColor dark:opacity-40">
                    </div>
            </div>
            <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
                <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
                    <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#0c1cac] dark:opacity-20">
                    </div>
                </div>
                <div className="mx-auto space-y-6 text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
                    <h1 className="text-mainHover dark:text-mainColor text-3xl sm:text-5xl lg:text-4xl xl:text-[3.5rem] font-bold leading-tight">
                        Immunization
                    </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                            Vaccinations have been a hot topic of conversation for some time now, but we don’t only need to worry about protecting the human population from dangerous and potentially deadly diseases. Dogs, cats, and other animals can be just as likely to catch viruses and other transmissible diseases, many of which can prove fatal. Pet vaccinations work in the same way as human vaccines – by preparing your pet’s body to recognize and fight specific harmful bacteria or viruses. Vaccines can significantly reduce or completely prevent symptoms and effects of some of the diseases that our animals come into contact with. They are usually provided on a regular schedule since their effectiveness doesn’t necessarily last forever.
                        </p>
                    <h1 className="text-mainColor-default dark:text-gray-300 text-2xl lg:text-2xl font-semibold pt-8">
                        Rabies Vaccination
                    </h1>
                        <p className=" text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                            Rabies is a zoonotic viral disease which infects domestic and wild animals. It is transmitted to other animals and humans through close contact with saliva from infected animals (i.e., bites, scratches, licks on broken skin, and mucous membranes). Once symptoms of the disease develop, rabies is fatal to both animals and humans. Rabies differs from many other infections in that the development of clinical disease can be prevented through timely immunization even after exposure to the infecting agent. The rabies vaccine is an altered or inactive version of the virus, which invokes an immune response in your pet and creates antibodies that fight the disease. Your pet’s immune response to the vaccine deteriorates over time, and your pet needs multiple doses throughout their lives to protect them from the disease. Vets usually advise dogs and cats to receive booster doses every year or every three years, depending on the vaccine.
                        </p>
                        <p className="text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        <span className="text-mainColor-default font-bold px-1">Dogs</span> – Puppies must be around 12 to 16 weeks old to receive the first dose of the rabies vaccine. This is called the primary dose, and the second dose of the vaccine is given within one year of the primary vaccination. Subsequent doses, known as booster doses, are administered every year or every three years, depending on the vaccine.
                        </p>
                        <p className="text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        <span className="text-mainColor-default font-bold px-1">Cats</span> – Kittens receive their first rabies vaccination at 8 to 12 weeks old. The second dose of the vaccine is given within a year of the first dose. Booster doses are administered yearly or once every three years, depending on the vaccine and the manufacturer’s instructions.
                        </p>
                    <h1 className="text-mainColor-default dark:text-gray-300 text-2xl lg:text-2xl font-semibold pt-4">
                        Deworming
                    </h1>
                        <p className="text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        Deworming is an important preventative care regime for reducing parasites (internal and external) and improving your pet’s health. It is also important to help to prevent transmission of parasites to you and your human family members! Here are some things to know about those unwanted houseguests your cat or dog might unknowingly be hosting. 
                        </p>
                        <p className="text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        <span className="text-mainColor-default font-bold px-1"> Puppies and Kittens need to be dewormed more often:</span> It is recommended that your puppy or kitten is dewormed every 2 weeks until they reach 3 months of age. Puppies and kittens are usually born with parasites passed on from mom (even if mom is dewormed) before they are born. After this, in our area, deworming depends on exposure risk. Please discuss this with your vet.
                        </p>
                        <p className="text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        <span className="text-mainColor-default font-bold px-1"> Just because you can’t see them, doesn’t mean they’re not there: </span>Sometimes we can see little wiggly worms in our pet’s feces, but this is not always the case. When in doubt, a fecal examination is done to check for parasites.
                        </p>
                        <p className=" text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        <span className="text-left text-mainColor-default font-bold px-1">  There are certain factors that can increase exposure. </span>
                        </p>
                        <p className="text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        <span className="text-mainColor-default font-bold px-1"> Certain people are at higher risk than others: </span> Children, the elderly, pregnant women, cancer patients, diabetics and anyone else with a suppressed immune system are at a greater risk. Many dogs and cat parasites are “zoonotic”, meaning they are transmissible from animals and cause disease in humans. Be cautious and take extra care if there is anyone in your household who might be at a greater risk for exposure.
                        </p>
                </div>
            </div>
            <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div className="h-24 w-2/3 bg-gradient-to-br from-mainColor-default opacity-50 blur-2xl dark:from-mainColor dark:invisible dark:opacity-40">
                    </div>
                    <div className="h-20 w-3/5 bg-gradient-to-r from-mainColor-default opacity-60 blur-2xl dark:from-mainColor dark:opacity-40">
                    </div>
            </div>
            <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
                <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
                    <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#0c1cac] dark:opacity-20">
                    </div>
                </div>
                <div className="pt-8 mx-auto space-y-6 text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
                    <h1 className="text-mainHover dark:text-mainColor text-3xl sm:text-5xl lg:text-4xl xl:text-[3.5rem] font-bold leading-tight">
                    Consultation and Check-up
                    </h1>
                        <p className=" text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                        Veterinary checkups are also known as routine wellness exams for pets and they are your cat or dog's best opportunity to achieve long-term health and a high-quality life.
The veterinarian will review your pet's medical history and ask you if you have any specific questions or concerns about your pet's health.
Following this, your veterinarian will conduct a physical examination of your pet which will generally consist of any or all of the following:
                        </p>
                        <div className="text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                            <ul className="list-disc pl-5 space-y-2 pb-5">
                                <li>Listening to your animal's lungs and heart</li>
                                <li>Checking your cat or dog's stance, gait, and weight</li>
                                <li>Examining your pet's eyes for signs of excessive tearing, discharge, redness, cloudiness, or eyelid issues</li>
                                <li>Checking your companion's coat for overall condition, abnormal hair loss, or dandruff</li>
                                <li>Examining your furry friend's nails and feet for damage or signs of a more serious health condition</li>
                                <li>Looking at your pet's ears for signs of bacterial infection, ear mites, wax build-up, or polyps</li>
                                <li>Examining the condition of your pet's teeth for any indications of periodontal disease, damage, or decay</li>
                                <li>Checking your pet's skin for a handful of problems such as parasites, dryness, lumps, and bumps (specifically in skin folds)</li>
                                <li>Palpating your companion's abdomen to assess the internal organs to see if they appear normal and to check for signs of discomfort</li>
                                <li>Feeling along your cat or dog's body (palpating) for hints of illness including swelling, evidence of lameness (such as limited range of motion), and signs of pain</li>
                            </ul>
                                <p className=" text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                                All of the tests above are meant to find signs of any health problems your cat or dog could be experiencing. Because our pets aren't able to tell us what they are physically feeling, these tests and checks help to determine how your furry friend is generally feeling.
                                </p>
                        </div>
                    <h1 className="text-mainColor-default dark:text-gray-300 text-2xl lg:text-2xl font-semibold pt-4">
                        Treatments for:
                    </h1>
                        <p className="text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        <span className="text-mainColor-default font-bold px-1"> Cough </span>
                        A pet’s history is the information you give your veterinarian about your 
                        pet’s illness. In a coughing pet, this would include details such as how 
                        long the cough has been present, possible contact with other pets, and 
                        whether the cough is triggered by any particular circumstances.
                        History can be very helpful when determining the cause of your pet’s
                        cough. For example, a dog that develops a cough after staying in a 
                        boarding kennel may have a respiratory infection called kennel cough;
                        a toy breed dog that coughs only when it is excited may have a collapsing 
                        trachea; a coughing cat with a history of being outdoors may have feline
                        heartworm disease or lungworms.
                        A thorough physical examination involves looking at all parts of the body, 
                        examining the mouth and throat, and listening to the heart and lungs with 
                        a stethoscope. This examination may provide clues about the cause of the 
                        cough. For example, a pet with an irregular heartbeat or heart murmur may
                        have heart disease, the presence of loud raspy sounds in the lung may 
                        indicate underlying pneumonia, a dog who coughs easily when the throat 
                        is touched may have tracheitis or a collapsing trachea.
                        </p>
                        <p className="text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                        <span className=" text-mainColor-default font-bold px-1"> Cold </span> 
                        When we use the term “cold” to describe a dog or cat illness that has 
                        the same symptoms as a human cold, we are using the same generic term 
                        (a “cold”), but in many cases, it refers to different actual viruses.
                        </p>
                        <ul className="text-left list-disc pl-5 space-y-2 pb-5">
                                <li>In dogs, these viruses are usually canine respiratory coronavirus, canine adenovirus type 2, canine parainfluenza virus, or Bordetella (also known as kennel cough).</li>
                                <li>In cats, the virus whose symptoms look most like a human cold is usually herpesvirus or calicivirus.
                                    Dogs and cats do catch colds, and their symptoms are just like humans. Both may have discharge from their noses, “wet” or labored breathing from congestion, sneezing (especially wet sneezes), watery eyes and lethargy (napping more, showing low energy). The cold symptoms last between 5 and 10 days on average.
                                    But if your cat or dog shows trouble breathing, stops eating or drinking, becomes overly lethargic, or seems to be in pain, go see your veterinarian right away. The symptoms of a cold can also look very similar to more serious diseases, so you’ll want a vet to do a full checkup. Do not give your pets over-the-counter medications without first talking to your veterinarian.
                                </li>
                        </ul>
                </div>
            </div>

            <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
                <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
                    <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#0c1cac] dark:opacity-20">
                    </div>
                </div>
                <div className=" pt-8 mx-auto space-y-6 text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
                    <h1 className="text-mainHover dark:text-mainColor text-3xl sm:text-5xl lg:text-4xl xl:text-[3.5rem] font-bold leading-tight">
                    CBC (Complete Blood Count) Testing 
                    </h1>
                        <p className=" text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                        This is a simple blood test that provides information about the different cell types in the blood. These include red blood cells, which carry oxygen to the tissues; white blood cells, which fight infection and respond to inflammation; and platelets, which help the blood to clot.
                        The CBC provides details about the number, size, and shape of the various cell types and identifies the presence of abnormal cells in circulation. See handout "Complete Blood Count" for further information. <br />
                        A small sample of blood is collected into a special tube that prevents the blood from clotting. The sample is then put in a machine called an automated blood analyzer, which counts the different cell types and describes various characteristics of the cells. In addition, a drop of blood is spread thinly on a glass slide, creating a blood smear. This smear is stained with special dyes and examined under the microscope to look at the appearance of individual cells. The blood smear is assessed by a trained technician or veterinarian and may be sent to a pathologist for review if the cells are abnormal.
                        </p>
                        <h1 className="text-mainColor-default dark:text-gray-300 text-2xl lg:text-2xl font-semibold">
                        The CBC provides information about the three types of cells found in blood:
                    </h1>
                       
                            <ol className=" text-left list-decimal pl-5 space-y-2">
                                <li>red blood cells (also called erythrocytes or red cells),</li>
                                <li>white blood cells (also called leukocytes or white cells), and</li>
                                <li> platelets (also called thrombocytes). </li>
                            </ol>
                        
                        <p className=" text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                            A CBC reports details on the number, size, and shape of each cell type, as well as any variation in appearance.
                        </p>
                </div>
            </div>

            <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
                <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
                    <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#0c1cac] dark:opacity-20">
                    </div>
                </div>
                <div className=" pt-8 mx-auto space-y-6 text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
                    <h1 className="text-mainHover dark:text-mainColor text-3xl sm:text-5xl lg:text-4xl xl:text-[3.5rem] font-bold leading-tight">
                    Pharmacy
                    </h1>
                        <p className=" text-left text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                        Our fully licensed pet pharmacy offers the same medications and supplements you get from your vet, and we provide those medications with unmatched value and convenience.
                        Having a written prescription can also be a plus if you live or work close to a pharmacy. If your pet is on a long term prescription you can pick up your pet medications when convenient.
                        We prepare medications specially flavored for your animal, whether they are canine, or feline. Even if your pet refuses to take his/her medication orally, we can provide a wide range of medications that may be applied topically to the skin. Please contact us if you have any questions regarding a compounded veterinary preparation.
                        </p>
                        <h1 className="text-mainColor-default dark:text-gray-300 text-2xl lg:text-2xl font-semibold">
                        Our pharmacy can prepare:
                        </h1>
                        <ul className="list-disc pl-5 space-y-2 pb-5 text-left">
                                <li>Flavored medication</li>
                                <li>Medicine in ideal size, strength, and dosage form</li>
                                <li>Unavailable medications</li>
                                <li>Combinations to improve compliance</li>
                        </ul>
                        <h1 className="text-mainColor-default dark:text-gray-300 text-2xl lg:text-2xl font-semibold">
                        Our pharmacy can prepare:
                        </h1>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 list-disc pl-5 space-y-2 pb-5 text-gray-700 dark:text-gray-300 text-left">
                            <li>Groffonia seed extract (5- hydroxytryptophan)</li>
                            <li>Acetaminophen</li>
                            <li>Alpha lipoic acid</li>
                            <li>Aspirin (at high doses)</li>
                            <li>Caffeine</li>
                            <li>NSAIDs</li>
                            <li>Imidazolines (e.g., Afrin®, Visine®)</li>
                            <li>Phenazopyridine</li>
                            <li>Phenylephrine</li>
                            <li>Pseudoephedrine</li>
                            <li>Vitamin D (esp. in rodenticides)</li>
                            <li>Benzocaine, benzoic acid derivatives</li>
                            <li>Attention deficit and hyperactivity medications</li>
                            <li>Benzodiazepines</li>
                            <li>Z-drugs</li>
                            <li>Birth control (esp. female pets)</li>
                            <li>Beta blockers</li>
                            <li>Statins</li>
                            <li>Baclofen</li>
                            <li>Asthma inhalers</li>
                            <li>Heartworm medications (genetic variants)</li>
                            <li>Isoniazid</li>
                        </ul>

                        <p className="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                            A CBC reports details on the number, size, and shape of each cell type, as well as any variation in appearance.
                        </p>
                </div>
            </div>
</section>
)
}