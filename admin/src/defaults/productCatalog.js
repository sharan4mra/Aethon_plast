const p1Img = '/assets/p1_60cc_28mm_hdpe_round_1770185621286.png';
const p2Img = '/assets/p2_40cc_33mm_hdpe_lw_1770185638542.png';
const p3Img = '/assets/p3_30cc_28mm_hdpe_round_1770185653807.png';
const p4Img = '/assets/p4_500cc_hdpe_bottle_1770185672936.png';
const p5Img = '/assets/p5_175cc_38mm_hdpe_1770185691477.png';
const p6Img = '/assets/p6_120cc_38mm_hdpe_min_1770185708664.png';
const p7Img = '/assets/p7_120cc_38mm_hdpe_mini_1770185755372.png';
const p8Img = '/assets/p8_300cc_45mm_hdpe_1770185771139.png';
const p9Img = '/assets/p9_225cc_38mm_sp400_1770185803330.png';
const bottlePharmaSmall = '/assets/bottle_pharma_small_white_1770185414201.png';
const bottleDropper = '/assets/bottle_dropper_small_1770185429856.png';
const bottleNutra = '/assets/bottle_nutra_wide_mouth_1770185448282.png';
const bottleFmcg = '/assets/bottle_fmcg_large_1770185467815.png';
const bottleCosmetic = '/assets/bottle_cosmetic_styled_1770185486372.png';
const crClosureHs130Img = '/assets/28mm_cr_closure_hs130.png';
const sp400MStyleImg = '/assets/28mm_sp400_m_style.png';
const ppCrHs035Img = '/assets/28mm_pp_cr_hs035.png';
const safCap38Img = '/assets/38mm_saf_cap_iiia.png';
const safCap33Img = '/assets/33mm_saf_cap_iiia.png';
const cr45mmImg = '/assets/45mm_cr_closures.png';
const cr45mmHs035Img = '/assets/45mm_cr_hs035.png';
const safCap38AssyImg = '/assets/38mm_saf_cap_assembly.png';
const safevistopImg = '/assets/safevistop_pp28.png';
const levodopaImg = '/assets/levodopa_entacapone_closure.png';
const caAcetateImg = '/assets/calcium_acetate_closure.png';
const fenoprofenImg = '/assets/fenoprofen_closure.png';
const cr400ArgImg = '/assets/28mm_cr_400_arg.png';
const ctClosure38Img = '/assets/38mm_closure_ct.png';
const ctClosure53Img = '/assets/ct_closure_53mm.png';
const ctClosure38LineImg = '/assets/ct_closure_38mm.png';
const ppCtHeatsealImg = '/assets/38mm_pp_ct_heatseal.png';
const whiteCap14Img = '/assets/14mm_white_cap.png';
const flipTop24mmImg = '/assets/flip_top_cap_24mm.png';
const nasalCap18mmImg = '/assets/nasal_spray_cap_18mm.png';
const pet500mlImg = '/assets/pet_500ml_amber_bottle.png';
const pet250ccImg = '/assets/pet_250cc_amber_bottle.png';



export const productData = {
    pharmaceuticals: {
        id: 'pharmaceuticals',
        title: 'Pharmaceutical Solutions',
        description: 'Regulatory-compliant packaging solutions ensuring safety, hygiene, and precision.',
        categories: {
            bottles: {
                title: 'Bottles',
                subCategories: {
                    hdpe: {
                        title: 'HDPE Bottles',
                        items: [
                            {
                                id: '1-60cc-28mm-hdpe-round',
                                name: '60cc Round Bottle',
                                actualName: '60 CC/28 mm white HDPE Round bottle',
                                subCategory: 'Pharmaceutical Bottles',
                                image: p1Img,
                                description: 'Premium 60cc HDPE round bottle featuring a standard 28mm neck, designed for secure storage of pharmaceutical liquids and tablets.',
                                features: [
                                    'Standard 28mm neck finish compatible with widespread closure systems.',
                                    'Rigid HDPE construction ensures impact resistance and durability.',
                                    'Round profile offers excellent stability on filling lines.',
                                    'Opaque white finish protects light-sensitive pharmaceutical compounds.',
                                    'Ideal capacity for mid-range liquid or tablet quantities.'
                                ]
                            },
                            {
                                id: '2-hdpe-40cc-33mm-lw',
                                name: '40cc Lightweight Bottle',
                                actualName: 'HDPE Bottles 40cc/33mm 01 (Lw)',
                                subCategory: 'Pharmaceutical Bottles',
                                image: p2Img,
                                description: 'Lightweight 40cc HDPE bottle with a wide 33mm neck, optimized for cost-effective pharmaceutical packaging.',
                                features: [
                                    'Lightweight (Lw) design reduces material usage and shipping costs.',
                                    'Wider 33mm neck facilitates easier filling of powders and capsules.',
                                    'High-density polyethylene barrier protects against moisture.',
                                    'Designed for high-speed automated capping lines.',
                                    'Clean, minimal aesthetic suitable for medical labeling.'
                                ]
                            },
                            {
                                id: '3-30cc-28mm-hdpe-round',
                                name: '30cc Round Bottle',
                                actualName: '30 CC/28 mm white HDPE Round bottle',
                                subCategory: 'Pharmaceutical Bottles',
                                image: p3Img,
                                description: 'Compact 30cc round HDPE bottle with 28mm neck, perfect for travel-size or sample pharmaceutical doses.',
                                features: [
                                    'Compact 30cc volume ideal for samples or travel packs.',
                                    'Universal 28mm neck accepts standard CR and CT closures.',
                                    'Robust wall thickness prevents paneling during transport.',
                                    'Chemical-resistant HDPE suitable for various solvents.',
                                    'Space-saving round design allows for dense shelf display.'
                                ]
                            },
                            {
                                id: '15-10ml-white-hdpe',
                                name: '10ml Dropper Bottle',
                                actualName: '10 ml White HDPE Bottle',
                                subCategory: 'Pharmaceutical Bottles',
                                image: bottleDropper,
                                description: 'Precision 10ml white HDPE bottle, standard for ophthalmic and nasal drop applications.',
                                features: [
                                    'Precision-molded 10ml volume for exact dosage delivery.',
                                    'Compatible with standard dropper tips and nozzle caps.',
                                    'Squeezable body allows for controlled dispensing by patients.',
                                    'High-opacity white finish protects light-sensitive solutions.',
                                    'Leak-proof neck design ensures sterility is maintained.'
                                ]
                            },
                            {
                                id: '16-15ml-white-hdpe',
                                name: '15ml Dropper Bottle',
                                actualName: '15 ml White HDPE Bottle',
                                subCategory: 'Pharmaceutical Bottles',
                                image: bottleDropper,
                                description: '15ml white HDPE bottle designed for eye drops, ear drops, and diagnostic reagents.',
                                features: [
                                    'Standard 15ml size suits typical treatment courses.',
                                    'Accepted industry standard for ophthalmic packaging.',
                                    'Flexible HDPE facilitates ease of use for elderly patients.',
                                    'Rigid enough to withstand automated filling and capping.',
                                    'Compact footprint optimizes pharmacy shelf storage.'
                                ]
                            },
                            {
                                id: '17-30ml-white-hdpe',
                                name: '30ml Pharma Bottle',
                                actualName: '30 ml White HDPE Bottle',
                                subCategory: 'Pharmaceutical Bottles',
                                image: p3Img,
                                description: 'Small 30ml HDPE bottle tailored for liquid oral dosage pharmaceuticals.',
                                features: [
                                    '30ml volume specifically for pediatric or partial course dosages.',
                                    'Engineered neck finish ensures secure seal with standard closures.',
                                    'Chemical inertness maintains stability of sensitive liquid formulations.',
                                    'Durable HDPE prevents breakage during patient handling.',
                                    'Plain surface area suitable for prescription labeling.'
                                ]
                            },
                            {
                                id: '19-60cc-33mm-hdpe',
                                name: '60cc 33mm Bottle',
                                actualName: '60 CC/33 mm Neck white HDPE Bottles',
                                subCategory: 'Pharmaceutical Bottles',
                                image: p1Img,
                                description: '60cc white HDPE bottle with a wider 33mm neck for easier filling of solid doses.',
                                features: [
                                    '33mm wide neck reduces spillage during high-speed filling.',
                                    '60cc size optimized for standard monthly tablet counts.',
                                    'Smooth surface finish enhances heat-shrink label application.',
                                    'FDA regulatory compliant resin for oral solid dosage.',
                                    'Compatible with friction-fit or induction-sealed caps.'
                                ]
                            },
                            {
                                id: '22-60cc-38mm-hdpe',
                                name: '60cc 38mm Bottle',
                                actualName: '60 cc HDPE Bottle with 38 mm Neck',
                                subCategory: 'Pharmaceutical Bottles',
                                image: p1Img,
                                description: '60cc HDPE bottle with a wide 38mm neck, offering easy access for tablets.',
                                features: [
                                    '38mm neck on a 60cc bottle allows for easy retrieval of contents.',
                                    'Compact form factor perfect for high-density pharmacy storage.',
                                    'Compatible with standard 38mm child-resistant caps.',
                                    'Seamless neck finish ensures reliable induction sealing.',
                                    'Durable construction protects against light and moisture.'
                                ]
                            }
                        ]
                    },
                    pet: {
                        title: 'PET Bottles',
                        items: [
                            {
                                id: 'pet-500ml-28mm-amber-dmf',
                                name: '500mL Amber PET Bottle',
                                actualName: '500 mL 28 mm Flat DMF Amber PET Bottle',
                                subCategory: 'Pharmaceutical Bottles',
                                image: pet500mlImg,

                                description: '500mL amber PET bottle with 28mm flat DMF neck finish, designed for light-sensitive pharmaceutical formulations.',
                                features: [
                                    '500mL capacity ideal for liquid pharmaceuticals and syrups.',
                                    'Amber PET material provides excellent UV protection for light-sensitive drugs.',
                                    '28mm flat DMF (Drug Master File) neck finish ensures regulatory compliance.',
                                    'Lightweight PET construction reduces shipping costs compared to glass.',
                                    'Shatter-resistant design enhances safety in clinical environments.',
                                    'Excellent chemical resistance for a wide range of pharmaceutical formulations.',
                                    'Recyclable PET material supports sustainability initiatives.'
                                ]
                            }
                        ]
                    }
                }
            },
            caps: {
                title: 'Caps',
                subCategories: {
                    nasal_caps: {
                        title: 'Nasal Caps',
                        items: []
                    }
                }
            },
            closures: {
                title: 'Closures',
                subCategories: {
                    cr_closures: {
                        title: 'CR Closures',
                        items: [
                            {
                                id: '28mm-cr-closure-hs130',
                                name: '28mm CR Closure',
                                actualName: '28 mm CR closure with HS 130 liner',
                                subCategory: 'CR Closures',
                                image: crClosureHs130Img,
                                description: 'Child-resistant closure with HS 130 heat seal liner for secure sealing.',
                                features: [
                                    'Certified Child-Resistant (CR) push-and-turn mechanism.',
                                    'HS 130 induction liner provides strong, peelable seal on HDPE bottles.',
                                    'Two-piece design with free-spinning outer shell prevents easy removal.',
                                    'Meets CPSC and ISO safety standards for pharmaceutical packaging.',
                                    'Excellent chemical resistance against aggressive pharmaceutical compounds.'
                                ]
                            },
                            {
                                id: '28mm-sp400-m-style',
                                name: 'SP400 CR Closure',
                                actualName: '28mm-SP400 "M" style CR closure with liner',
                                subCategory: 'CR Closures',
                                image: sp400MStyleImg,
                                description: '28mm SP400 closure featuring "M" style design with protective liner.',
                                features: [
                                    '"M" Style fine-ribbed outer shell offers improved grip for adults.',
                                    'Standard SP-400 finish ensures broad compatibility with glass and plastic bottles.',
                                    'Integrated liner custom-selected for specific barrier requirements (moisture/oxygen).',
                                    'Robust polypropylene construction withstands high-torque capping.',
                                    'Visual indicators on top instruct users on proper opening method.'
                                ]
                            },
                            {
                                id: '28mm-pp-cr-closure-hs035',
                                name: 'PP CR Closure',
                                actualName: '28 mm PP CR closure with liner HS035/25W',
                                subCategory: 'CR Closures',
                                image: ppCrHs035Img,
                                description: '28mm Polypropylene CR closure with high-performance HS035/25W liner.',
                                features: [
                                    'HS035 liner creates a welded bond for maximum tamper evidence.',
                                    'Pulp backing provides reseal integrity after initial opening.',
                                    '28mm heavy-wall design prevents "doming" or deformation.',
                                    'Ideal for liquid pharmaceuticals requiring hermetic seals.',
                                    'Smooth top surface suitable for branding or Warning text printing.'
                                ]
                            },
                            {
                                id: '45mm-cr-closure-hs035',
                                name: '45mm CR Closure',
                                actualName: '45 mm CR closure with liner HS035-0.025',
                                subCategory: 'CR Closures',
                                image: cr45mmHs035Img,
                                description: 'Large 45mm child-resistant closure with precision HS035-0.025 liner.',
                                features: [
                                    'Wide 45mm diameter allows for easy dispensing of tablets and powders.',
                                    'HS035-0.025 liner engineered for high-speed induction sealing lines.',
                                    'Enhanced child-safety torque requirements for large-format bottles.',
                                    'Textured sides prevent slippage during manual closing by patients.',
                                    'FDA-approved materials used for both shell and liner components.'
                                ]
                            },
                            {
                                id: '45mm-crc-closure-aethon',
                                name: '45mm CRC Closure',
                                actualName: '45 mm CRC Closure – Aethon Plast',
                                subCategory: 'CR Closures',
                                image: cr45mmImg,
                                description: 'Premium 45mm CRC closure manufactured by Aethon Plast.',
                                features: [
                                    'Proprietary Aethon Plast design for distinctive brand identity.',
                                    'Optimized internal threads reduce cross-threading during capping.',
                                    'Superior stress-crack resistance for long shelf-life products.',
                                    'Dual-action opening mechanism effective against child access.',
                                    'Compatible with standard 45mm neck finishes in both PET and HDPE.'
                                ]
                            },
                            {
                                id: '28mm-cr-closure-400-arg',
                                name: '400-ARG CR Closure',
                                actualName: '28 mm CR Closure 400-ARG Assembly (with liner)',
                                subCategory: 'CR Closures',
                                image: cr400ArgImg,
                                description: 'Complete 28mm CR closure assembly with 400-ARG finish (includes liner).',
                                features: [
                                    '400-ARG finish designed specifically for strict pharmacopoeia compliance.',
                                    'Pre-assembled liner system reduces manufacturing complexity.',
                                    'High-contrast embossing options available for safety warnings.',
                                    'Consistent removal torque for elder-friendly adult access.',
                                    'Batch-tested for reliable child-resistant performance.'
                                ]
                            },
                            {
                                id: '33mm-child-resistant-cap',
                                name: '33mm Child Resistant Closure',
                                actualName: '33 mm Child Resistant Cap / Closure (Assembly)',
                                subCategory: 'CR Closures',
                                image: safCap33Img,
                                description: '33mm child-resistant assembly for enhanced safety.',
                                features: [
                                    '33mm size bridges gap between standard liquid and tablet finishes.',
                                    'Advanced ratchet system prevents back-off during shipping vibration.',
                                    'Smooth outer shell for a clean, medical aesthetic.',
                                    'Compatible with friction-fit or heat-induction liners.',
                                    'Rigid inner cap ensures tight seal against bottle land.'
                                ]
                            },
                            {
                                id: '38mm-child-resistant-cap',
                                name: '38mm Child Resistant Closure',
                                actualName: '38 mm Child Resistant Cap / Closure (Assembly)',
                                subCategory: 'CR Closures',
                                image: safCap38AssyImg,
                                description: 'Robust 38mm child-resistant cap assembly.',
                                features: [
                                    'Heavy-duty 38mm construction for bulk vitamin and supplement jars.',
                                    'Double-shell assembly provides superior durability and impact resistance.',
                                    'Deep thread engagement ensures closure stays secure if dropped.',
                                    'Audible "click" feature confirms engagement of safety threads.',
                                    'Designed for seamless integration with induction sealing equipment.'
                                ]
                            },
                            {
                                id: '28mm-pp-cr-closure-tg-ii-ts',
                                name: 'PP CR Closure (TG II-TS)',
                                actualName: '28 mm PP CR closure with liner TG II-TS',
                                subCategory: 'CR Closures',
                                image: ppCrHs035Img,
                                description: '28mm PP closure with TG II-TS liner for specific applications.',
                                features: [
                                    'TG II-TS liner offers specific chemical resistance for aggressive solvents.',
                                    'Top-Seal (TS) technology ensures clean peel without residue.',
                                    'Ideal for specialized pharmaceutical formulations (e.g., strong syrups).',
                                    'Precision injection molding ensures dimensional consistency.',
                                    'Tamper-evident liner provides visible security for end-users.'
                                ]
                            },
                            {
                                id: '38mm-pp-cr-closure-hs035',
                                name: '38mm PP CR Closure',
                                actualName: '38 mm PP CR closure (HS035 HeatSeal / 20)',
                                subCategory: 'CR Closures',
                                image: safCap38Img,
                                description: 'Heat-sealable 38mm PP CR closure (HS035 HeatSeal / 20).',
                                features: [
                                    'HS035 HeatSeal liner provides universal sealing on multiple plastic types.',
                                    'Two-piece CR design keeps the liner intact during application.',
                                    '38mm diameter optimized for nutraceutical powder filling.',
                                    'Moisture-resistant seal protects hygroscopic products.',
                                    'Ergonomic ribs on outer cap facilitate easy removal by adults.'
                                ]
                            },
                            {
                                id: 'safevistop-pp28-tamper-evident',
                                name: 'Safevistop Tamper Evident Cap',
                                actualName: 'Safevistop PP28 Tamper Evident CR Cap',
                                subCategory: 'CR Closures',
                                image: safevistopImg,
                                description: 'Tamper-evident PP28 cap for maximum security.',
                                features: [
                                    'Dual-functionality: Child-Resistant + Tamper-Evident protection.',
                                    'Safevistop mechanism creates visible separation ring upon opening.',
                                    'PP28 standard finish for broad European and International compatibility.',
                                    'High fluid-tightness even without additional induction liners.',
                                    'Distinctive audible visual indication of initial breach.'
                                ]
                            }
                        ]
                    },
                    saf_caps: {
                        title: 'SAF Caps',
                        items: [
                            {
                                id: '38mm-saf-cap-iiia-triveni',
                                name: '38mm SAF Cap IIIA',
                                actualName: '38 mm SAF Cap IIIA – Triveni Polymer',
                                subCategory: 'SAF Caps',
                                image: safCap38Img,
                                description: '38mm SAF Cap IIIA designed for high reliability (Triveni Polymer).',
                                features: [
                                    'SAF IIIA design standard for established safety and functionality.',
                                    '38mm profile suitable for widely used pharmaceutical packers.',
                                    'Engineered by Triveni Polymer for consistent quality assurance.',
                                    'Enhanced grip knurling for easy application and removal.',
                                    'Compatible with standard 38mm induction seal liners.'
                                ]
                            },
                            {
                                id: '33mm-saf-cap-iiia-triveni',
                                name: '33mm SAF Cap IIIA',
                                actualName: '33 mm SAF Cap IIIA – Triveni Polymer',
                                subCategory: 'SAF Caps',
                                image: safCap33Img,
                                description: '33mm SAF Cap IIIA offering superior sealing performance (Triveni Polymer).',
                                features: [
                                    'Compact 33mm SAF IIIA design for intermediate bottle sizes.',
                                    'Precision sealing land ensures leak-free storage.',
                                    'Durable polymer construction resists stress cracking.',
                                    'Proven Triveni Polymer mold quality for high-output lines.',
                                    'Cost-effective solution for bulk pharmaceutical packaging.'
                                ]
                            }
                        ]
                    },
                    ct_closures: {
                        title: 'CT Closures',
                        items: [
                            {
                                id: '38mm-ct-closure-pravesha',
                                name: '38mm CT Closure',
                                actualName: '38 mm CT Closure – Pravesha Industries',
                                subCategory: 'CT Closures',
                                image: ctClosure38Img,
                                description: 'Standard 38mm Continuous Thread (CT) closure (Pravesha Industries).',
                                features: [
                                    'Continuous Thread (CT) design allows for simple, intuitive operation.',
                                    '38mm finish widely compatible with stock jars and bottles.',
                                    'Manufactured by Pravesha Industries to strict dimensional tolerances.',
                                    'Ideal for non-regulated OTC products and supplements.',
                                    'Plain top surface facilitates easy price marking or branding.'
                                ]
                            },
                            {
                                id: '38mm-pp-ct-closure-hs035',
                                name: '38mm PP CT Closure',
                                actualName: '38 mm PP CT closure (HS035 HeatSeal / 20)',
                                subCategory: 'CT Closures',
                                image: ppCtHeatsealImg,
                                description: '38mm PP CT closure with heat seal capability (HS035 HeatSeal / 20).',
                                features: [
                                    'Polypropylene construction offers excellent fatigue resistance.',
                                    'HS035 HeatSeal liner creates a tamper-evident hermetic barrier.',
                                    '38mm standard thread compatible with SP-400 bottle finishes.',
                                    'Designed for automated capping equipment with stable vertical stacking.',
                                    'Resistant to moisture vapor transmission for sensitive dry products.'
                                ]
                            },
                            {
                                id: '14mm-white-cap-inner-ring',
                                name: '14mm White Cap',
                                actualName: '14 mm White cap with inner ring',
                                subCategory: 'CT Closures',
                                image: whiteCap14Img,
                                description: '14mm white continuous thread cap with inner ring seal for small pharmaceutical bottles.',
                                features: [
                                    'Compact 14mm size ideal for small dropper bottles and vials.',
                                    'Inner ring provides additional seal security.',
                                    'White color suitable for pharmaceutical branding.',
                                    'Continuous thread design ensures reliable closure.',
                                    'Compatible with standard 14mm neck finish bottles.'
                                ]
                            },
                            {
                                id: 'white-nasal-cap-cover',
                                name: 'White Nasal Cap',
                                actualName: 'White Nasal cap with cover',
                                subCategory: 'CT Closures',
                                image: nasalCap18mmImg,
                                description: 'Specialized nasal spray cap with protective cover for pharmaceutical nasal delivery systems.',
                                features: [
                                    'Designed specifically for nasal spray applications.',
                                    'Protective cover maintains hygiene and prevents contamination.',
                                    'Precise actuator mechanism for controlled dosing.',
                                    'White pharmaceutical-grade material.',
                                    'Compatible with standard nasal spray bottles.'
                                ]
                            }
                        ]
                    },
                    blister: {
                        title: 'Blister Packaging',
                        items: [
                            {
                                id: 'levodopa-carbidopa-entacapone-pack',
                                name: 'Levodopa Tablet Pack',
                                actualName: 'Levodopa, Carbidopa & Entacapone Tablet Pack',
                                subCategory: 'Blister Packaging',
                                image: levodopaImg,
                                description: 'Specialized packaging for Levodopa/Carbidopa tablets.',
                                features: [
                                    'Custom cavity design for Levodopa/Carbidopa tablet protection.',
                                    'High-barrier PVDC ensures stability of sensitive active ingredients.',
                                    'Child-resistant backing foil options available for safety.',
                                    'Print-ready surface for regulatory text and dosage instructions.',
                                    'Compliance with moisture permeation standards for long-term storage.'
                                ]
                            }
                        ]
                    },
                    capsule_pack: {
                        title: 'Capsule Packaging',
                        items: [
                            {
                                id: 'calcium-acetate-capsules-pack',
                                name: 'Calcium Acetate Capsules',
                                actualName: 'Calcium Acetate Capsules USP 667 mg Pack',
                                subCategory: 'Capsule Packaging',
                                image: caAcetateImg,
                                description: 'Packaging solution for Calcium Acetate capsules (USP 667 mg).',
                                features: [
                                    'Optimized geometry prevents crushing of 667mg Calcium Acetate capsules.',
                                    'Protects hygroscopic capsules from ambient moisture ingress.',
                                    'Patient-friendly push-through foil design.',
                                    'Lightweight material limits shipping weight for bulk distribution.',
                                    'USP standard compliant materials for direct drug contact.'
                                ]
                            },
                            {
                                id: 'fenoprofen-calcium-capsules-pack',
                                name: 'Fenoprofen Capsules 300mg',
                                actualName: 'Fenoprofen Calcium Capsules USP 300 mg Pack',
                                subCategory: 'Capsule Packaging',
                                image: fenoprofenImg,
                                description: 'Secure packaging for Fenoprofen Calcium capsules (USP 300 mg).',
                                features: [
                                    'Designed for secure containment of 300mg Fenoprofen Calcium doses.',
                                    'Neutral material formulation prevents chemical interaction with the drug.',
                                    'Compact blister layout maximizes carton efficiency.',
                                    'Tamper-evident sealing assures patient of product integrity.',
                                    'Easily customizable for varying pack sizes (e.g., 10s, 30s).'
                                ]
                            },
                            {
                                id: 'fenoprofen-calcium-capsules-310x600',
                                name: 'Fenoprofen Capsules 310mm',
                                actualName: 'Fenoprofen Calcium Capsules, 310mmX600mm',
                                subCategory: 'Capsule Packaging',
                                image: fenoprofenImg,
                                description: 'Large format packaging for Fenoprofen Calcium Capsules (310mm x 600mm).',
                                features: [
                                    'Large dimension (310x600mm) suitable for bulk clinical supply.',
                                    'High-barrier material ensures long-term stability of contents.',
                                    'Robust construction prevents damage during bulk transit.',
                                    'Ideal for hospital or pharmacy dispensing units.',
                                    'Maintains sterility and integrity of the capsule dosage form.'
                                ]
                            }
                        ]
                    }
                }
            }
        }
    },
    nutraceuticals: {
        id: 'nutraceuticals',
        title: 'Nutraceutical Packaging',
        description: 'Packaging solutions designed for nutritional supplements.',
        categories: {
            bottles: {
                title: 'Bottles',
                subCategories: {
                    hdpe: {
                        title: 'HDPE Bottles',
                        items: [
                            {
                                id: '5-hdpe-175cc-38mm',
                                name: '175cc Nutra Bottle',
                                actualName: 'HDPE Bottles 175CC/38 mm',
                                subCategory: 'Nutraceutical Bottles',
                                image: p5Img,
                                description: '175cc wide-mouth HDPE bottle with 38mm neck, specifically engineered for nutraceutical supplements.',
                                features: [
                                    '38mm wide mouth allows for easy dispensing of large softgels.',
                                    '175cc volume optimized for standard supplement counts (e.g., 60/90 count).',
                                    'Induction-seal ready land area for tamper-evident safety.',
                                    'Pharmaceutical-grade resin ensures no leaching or odor transfer.',
                                    'Sturdy base prevents tipping on filling lines.'
                                ]
                            },
                            {
                                id: '6-hdpe-120cc-38mm-min',
                                name: '120cc "Minimum" Bottle',
                                actualName: 'HDPE Bottle 120 CC/38 mm Neck Minimum',
                                subCategory: 'Nutraceutical Bottles',
                                image: p6Img,
                                description: '120cc "Minimum" style HDPE bottle with 38mm neck, balancing compactness with capacity.',
                                features: [
                                    'Optimized "Minimum" height profile for shelf-space efficiency.',
                                    '38mm neck finish suits standard vitamin cap sizes.',
                                    'Rigid shoulder design supports heavy stacking loads.',
                                    'Smooth surface finish enhances adhesive label bonding.',
                                    'Ideal for probiotics and medium-count vitamin content.'
                                ]
                            },
                            {
                                id: '7-120cc-hdpe-38mm-mini',
                                name: '120cc "Mini" Bottle',
                                actualName: '120cc HDPE Bottle with 38 mm Neck Mini',
                                subCategory: 'Nutraceutical Bottles',
                                image: p7Img,
                                description: 'Compact "Mini" 120cc HDPE bottle with 38mm neck, designed for portable supplement packaging.',
                                features: [
                                    '"Mini" form factor serves portable and travel-ready market needs.',
                                    'Full 38mm diameter neck maintained for easy product access.',
                                    'Thick-wall construction provides premium feel and durability.',
                                    'Compatible with child-resistant and continuous thread caps.',
                                    'Excellent moisture barrier properties for hygroscopic powders.'
                                ]
                            },
                            {
                                id: '13-180cc-hdpe-45mm',
                                name: '180cc Packer Bottle',
                                actualName: '180 CC HDPE Bottle with 45 mm Neck',
                                subCategory: 'Nutraceutical Bottles',
                                image: p5Img,
                                description: '180cc HDPE packer bottle with a wide 45mm neck, facilitating easy filling of tablets and powders.',
                                features: [
                                    '45mm extra-wide mouth optimizes automated filling speed.',
                                    '180cc capacity suits common 60-count supplement configurations.',
                                    'Rigid finish withstands high-torque capping machines.',
                                    'Shoulder design allows for secure shrink-sleeve application.',
                                    'FDA compliant materials for direct food/drug contact.'
                                ]
                            },
                            {
                                id: '20-120cc-38mm-hdpe',
                                name: '120cc Standard Bottle',
                                actualName: '120 CC/38 mm Neck white HDPE Bottles',
                                subCategory: 'Nutraceutical Bottles',
                                image: p6Img,
                                description: 'Standard 120cc white HDPE bottle featuring a 38mm neck, the industry workhorse for supplements.',
                                features: [
                                    'Versatile 120cc capacity fits a wide range of supplement product lines.',
                                    '38mm neck is the industry standard for nutraceutical closures.',
                                    'Highly resistant to impact breakage during shipping.',
                                    'Provides an excellent moisture barrier for sensitive capsules.',
                                    'Large labeling panel maximizes brand visibility.'
                                ]
                            },
                            {
                                id: '23-120cc-38mm-neck-min',
                                name: '120cc "Min" Bottle',
                                actualName: 'HDPE Bottles 120cc/38 mm Neck Minimum',
                                subCategory: 'Nutraceutical Bottles',
                                image: p6Img,
                                description: '120cc "Minimum" series HDPE bottle with 38mm neck, optimizing shelf density.',
                                features: [
                                    'Engineered to "Minimum" dimensions for maximum shelf efficiency.',
                                    'Standard 120cc volume preserved within a compact footprint.',
                                    '38mm neck finish remains compatible with standard closures.',
                                    'Cost-effective shape minimizes shipping volume per unit.',
                                    'Excellent barrier properties for vitamins and supplements.'
                                ]
                            }
                        ]
                    },
                    pet: {
                        title: 'PET Bottles',
                        items: [
                            {
                                id: 'pet-250cc-24mm-amber',
                                name: '250cc Amber PET Bottle',
                                actualName: '250 cc / 24 mm Neck Amber PET Bottle',
                                subCategory: 'Nutraceutical Bottles',
                                image: pet250ccImg,

                                description: '250cc amber PET bottle with 24mm neck finish, ideal for nutraceutical supplements requiring UV protection.',
                                features: [
                                    '250cc capacity perfect for standard supplement bottle counts.',
                                    'Amber PET provides UV protection for light-sensitive vitamins and supplements.',
                                    '24mm neck finish compatible with standard nutraceutical closures.',
                                    'Lightweight and shatter-resistant for safe consumer handling.',
                                    'Crystal-clear amber transparency allows product visibility.',
                                    'Excellent moisture barrier properties protect hygroscopic ingredients.',
                                    'Eco-friendly recyclable PET material.'
                                ]
                            }
                        ]
                    }
                }
            },
            caps: {
                title: 'Caps',
                subCategories: {
                    screw_caps: {
                        title: 'Screw Caps',
                        items: []
                    }
                }
            },

        }
    },
    cosmetics: {
        id: 'cosmetics',
        title: 'Cosmetic Packaging',
        description: 'Premium aesthetic packaging for beauty products.',
        categories: {
            bottles: {
                title: 'Bottles',
                subCategories: {
                    hdpe: {
                        title: 'HDPE Bottles',
                        items: [
                            {
                                id: '9-hdpe-225cc-38mm-sp400',
                                name: '225cc SP400 Bottle',
                                actualName: 'HDPE Bottle 225cc/38mm SP400 Neck System',
                                subCategory: 'Cosmetic Bottles',
                                image: p9Img,
                                description: '225cc cosmetic-grade HDPE bottle featuring a 38mm SP400 neck system for premium product lines.',
                                features: [
                                    'Sleek cosmetic design allows lead high-end branding applications.',
                                    '38mm SP400 neck offers tight sealing with cosmetic pumps or caps.',
                                    'Smooth surface finish enhances silk-screen printing quality.',
                                    'Chemical-resistant HDPE ideal for lotions, serums, and oils.',
                                    'Ergonomic grip suitable for daily consumer use.'
                                ]
                            },
                            {
                                id: '10-60cc-38mm-sp400',
                                name: '60cc SP400 Bottle',
                                actualName: '60cc/38mm HDPE Bottle SP400 Neckstyle',
                                subCategory: 'Cosmetic Bottles',
                                image: bottleCosmetic,
                                description: 'Compact 60cc HDPE bottle with 38mm SP400 neck, ideal for travel-size cosmetic applications.',
                                features: [
                                    'Compact 60cc size meets TSA carry-on regulations.',
                                    '38mm SP400 finish ensures leak-proof compatibility with pumps.',
                                    'Durable wall construction prevents collapsing during dispensing.',
                                    'Wide mouth facilitates easy filling of viscous creams.',
                                    'Premium matte or glossy finish options available.'
                                ]
                            },
                            {
                                id: '11-40cc-sp400-m-style',
                                name: '40cc M-Style Bottle',
                                actualName: 'Round 40cc SP400 "M" Style HDPE bottles',
                                subCategory: 'Cosmetic Bottles',
                                image: p2Img,
                                description: 'Distinctive 40cc "M" Style round HDPE bottle with SP400 neck for specialized cosmetic packaging.',
                                features: [
                                    'Unique "M" Style profile offers shelf differentiation.',
                                    '40cc capacity precise for concentrated serums or treatments.',
                                    'SP400 neck accepts standard droppers and treatment pumps.',
                                    'HDPE material ensures compatibility with active ingredients.',
                                    'Stable base design prevents tipping during usage.'
                                ]
                            },
                            {
                                id: '12-90cc-33mm-sp400',
                                name: '90cc SP400 Bottle',
                                actualName: 'HDPE Bottles 90cc/33 mm SP400 Neck',
                                subCategory: 'Cosmetic Bottles',
                                image: bottleCosmetic,
                                description: 'Versatile 90cc HDPE bottle with 33mm SP400 neck, perfectly sized for personal care products.',
                                features: [
                                    '90cc volume ideal for mid-sized lotions or toners.',
                                    '33mm SP400 neck fits standard dispense pumps.',
                                    'Soft curves provide a comfortable hand feel for users.',
                                    'High opaque coverage for protecting UV-sensitive ingredients.',
                                    'Seamless manufacturing ensures high burst strength.'
                                ]
                            },
                            {
                                id: '14-200cc-sp400-m-style',
                                name: '200cc M-Style Bottle',
                                actualName: '200cc SP400 M Style White HDPE bottle',
                                subCategory: 'Cosmetic Bottles',
                                image: bottleCosmetic,
                                description: 'Elegant 200cc "M" Style white HDPE bottle with SP400 neck for premium body care lines.',
                                features: [
                                    'Generous 200cc size ideal for body lotions and washes.',
                                    'SP400 finish supports high-output dispensing pumps.',
                                    '"M" Style aesthetic provides modern, clean shelf presence.',
                                    'Impact-resistant HDPE protects product during e-commerce shipping.',
                                    'Smooth panel allows for extensive labeling or screen printing.'
                                ]
                            }
                        ]
                    }
                }
            },
            caps: {
                title: 'Caps',
                subCategories: {
                    flip_top: {
                        title: 'Flip Top Caps',
                        items: []
                    }
                }
            }
        }
    },
    fmcg: {
        id: 'fmcg',
        title: 'FMCG Solutions',
        description: 'Cost-effective high-volume packaging for consumer goods.',
        categories: {
            bottles: {
                title: 'Bottles',
                subCategories: {
                    hdpe: {
                        title: 'HDPE Bottles',
                        items: [
                            {
                                id: '4-hdpe-500cc',
                                name: '500cc FMCG Bottle',
                                actualName: 'HDPE Bottles 500cc',
                                subCategory: 'FMCG Bottles',
                                image: p4Img,
                                description: 'High-capacity 500cc HDPE bottle designed for bulk consumer goods and personal care products.',
                                features: [
                                    'Large 500cc capacity serves bulk packaging needs efficiently.',
                                    'Ergonomic shape allows for comfortable handling despite size.',
                                    'Durable HDPE withstands drop tests and rough handling.',
                                    'Large label area provides maximum shelf branding impact.',
                                    'Suitable for shampoos, lotions, and household cleaners.'
                                ]
                            },
                            {
                                id: '8-hdpe-300cc-45mm',
                                name: '300cc Wide Neck Bottle',
                                actualName: 'HDPE Bottles 300cc/45 mm',
                                subCategory: 'FMCG Bottles',
                                image: p8Img,
                                description: 'Robust 300cc HDPE bottle containing a wide 45mm neck for easy pouring and Scooping.',
                                features: [
                                    'Extra-wide 45mm neck accommodates scoops for powders/proteins.',
                                    '300cc volume fits substantial product weight requirements.',
                                    'Heavy-duty HDPE resists chemical aggression from detergents.',
                                    'Wide base ensures high stability during filling and shelving.',
                                    'Versatile design suits both food and non-food FMCG applications.'
                                ]
                            },
                            {
                                id: '18-20mm-neck-215g',
                                name: '215g Heavy Duty Bottle',
                                actualName: '20 mm Neck 215 g white bottle',
                                subCategory: 'FMCG Bottles',
                                image: bottleFmcg,
                                description: '215g weight white HDPE bottle offering substantial durability, featuring a 20mm neck.',
                                features: [
                                    'Heavy-duty 215g weight allows for pressurized content.',
                                    '20mm neck compatible with restricted-flow dispensing inserts.',
                                    'Ideal for specialized home care or industrial chemical products.',
                                    'Thick wall construction prevents permeation of volatile ingredients.',
                                    'Bright white base color ensures vivid label contrast.'
                                ]
                            },
                            {
                                id: '21-750cc-53mm-hdpe',
                                name: '750cc Bulk Bottle',
                                actualName: '750 CC HDPE Bottle with 53 mm Neck',
                                subCategory: 'FMCG Bottles',
                                image: bottleFmcg,
                                description: 'Large-scale 750cc HDPE bottle with 53mm neck, built for bulk consumer goods.',
                                features: [
                                    'Massive 750cc volume for family-size or economy packs.',
                                    '53mm wide neck allows for rapid dispensing of thick liquids/powders.',
                                    'Heavy-duty construction ensures container integrity under load.',
                                    'Ergonomic profile designed for safe handling by consumers.',
                                    'Recyclable HDPE material aligns with sustainability goals.'
                                ]
                            }
                        ]
                    }
                }
            },
            caps: {
                title: 'Caps',
                subCategories: {
                    specialty: {
                        title: 'Specialty Caps',
                        items: []
                    }
                }
            },
            closures: {
                title: 'Closures',
                subCategories: {
                    ct_closures: {
                        title: 'CT Closures',
                        items: [
                            {
                                id: '53mm-ct-closure-hs123-20',
                                name: '53mm CT Closure',
                                actualName: 'CT Closure 53 mm with liner (HS123-20)',
                                subCategory: 'CT Closures',
                                image: ctClosure53Img,
                                description: 'Wide 53mm CT closure with HS123-20 liner.',
                                features: [
                                    'Extra-wide 53mm opening ideal for powders, protein mixes, and granules.',
                                    'HS123-20 liner enables secure heat sealing on PE and PP containers.',
                                    'Robust thread design prevents stripping even under high torque.',
                                    'Matte finish options available to reduce scuffing during transit.',
                                    'Food-grade materials compliant for nutritional and FMCG uses.'
                                ]
                            },
                            {
                                id: '38mm-ct-closure-aethon',
                                name: '38mm CT Closure (Lined)',
                                actualName: 'CT Closure 38 mm with liner – Aethon Plast',
                                subCategory: 'CT Closures',
                                image: ctClosure38LineImg,
                                description: 'Quality 38mm CT closure with liner (Aethon Plast).',
                                features: [
                                    'Aethon Plast quality assurance for reliable high-volume supply.',
                                    'Pre-inserted liner ensures immediate readiness for production lines.',
                                    '38mm CT design is the industry standard for bulk tablets and powders.',
                                    'High-gloss finish options for premium shelf appeal.',
                                    'Secure sealing performance protects against environmental contamination.'
                                ]
                            },
                            {
                                id: 'flip-top-shampoo-cap-215g',
                                name: 'Shampoo Flip Top Cap',
                                actualName: 'Top cover with shampoo cap for 215g',
                                subCategory: 'CT Closures',
                                image: flipTop24mmImg,
                                description: 'Flip-top shampoo cap designed for 215g bottles, providing convenient dispensing for personal care products.',
                                features: [
                                    'Flip-top design allows one-handed operation for shower use.',
                                    'Specifically sized for 215g shampoo and conditioner bottles.',
                                    'Snap-close mechanism prevents leakage during transport.',
                                    'Smooth dispensing opening for controlled product flow.',
                                    'Durable hinge design withstands repeated opening/closing.'
                                ]
                            }
                        ]
                    }
                }
            }
        }
    }
};

export const getAllProductsFromCatalog = (catalog) => {
    const allProducts = [];
    Object.values(catalog || {}).forEach(industry => {
        if (industry.categories) {
            Object.values(industry.categories).forEach(category => {
                if (category.subCategories) {
                    Object.values(category.subCategories).forEach(subCat => {
                        if (subCat.items) {

                            const itemsWithMeta = subCat.items.map(item => ({
                                ...item,
                                industryId: industry.id,
                                industryTitle: industry.title,
                                categoryId: category.title.toLowerCase(),
                                categoryTitle: category.title
                            }));
                            allProducts.push(...itemsWithMeta);
                        }
                    });
                }
            });
        }
    });
    return allProducts;
};

export const getAllProducts = () => {
    return getAllProductsFromCatalog(productData);
};

export const getProductByIdFromCatalog = (catalog, id) => {
    let foundProduct = null;
    let metaInfo = {};

    Object.values(catalog || {}).forEach(industry => {
        if (industry.categories) {
            Object.entries(industry.categories).forEach(([catKey, category]) => {
                if (category.subCategories) {
                    Object.values(category.subCategories).forEach(subCat => {
                        if (subCat.items) {
                            const product = subCat.items.find(p => p.id === id);
                            if (product) {
                                foundProduct = product;
                                metaInfo = {
                                    industryId: industry.id,
                                    industryTitle: industry.title,
                                    categoryId: catKey,
                                    categoryTitle: category.title
                                };
                            }
                        }
                    });
                }
            });
        }
    });

    if (foundProduct) {
        return { ...foundProduct, ...metaInfo };
    }
    return null;
};

export const getProductById = (id) => {
    return getProductByIdFromCatalog(productData, id);
};
