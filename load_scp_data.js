const scpData = {
    "scps": [
        {//SCP 003
            "id": "SCP003",//"SCP000"
            "name": "SCP 003 - Biological Motherboard",
            "safety_class": "Euclid",
            "image": "images/SCP-003_img.jpeg", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-003 is to be maintained at a constant temperature of no less than 35°C and ideally kept above 100°C. No living multicellular organisms of Category IV or higher complexity may be allowed to come into contact with SCP-003.
                            <p>In event of total power failure, if SCP-003-1 begins to increase its mass, assigned personnel must engage in skin contact with SCP-003-1. Ideally, personnel may use their body heat to return SCP-003-1 to above the critical temperature; however, skin contact must be maintained even in event of SCP-003 reaching activation temperature, lasting at minimum until SCP-003-1 advances fully to its second growth stage.</p>
                            <p>Personnel who enter SCP-003's containment area must first be examined for body parasites of Category IV or higher complexity, and sterilized if such organisms are present. All personnel who have come in physical contact with SCP-003-1 are to immediately report for sterilization afterwards.</p>
                            <p>SCP-003-1 must not be removed from SCP-003-2 except in case of emergency procedures detailed above. Any significant change in SCP-003-2's rune activity (including pattern, frequency, or color) should be reported within three (3) hours of occurrence. Cessation of rune activity must be reported immediately. SCP-003-2 must be supplied with power via the source designated Generator 003-IX at all times.</p>`,
                    "description": `SCP-003 consists of two related components of separate origin, referred to as SCP-003-1 and SCP-003-2.`,
                    "additional": `<p>SCP-003-1 appears to be composed of chitin, hair, and nails of unknown biology, arranged in a configuration similar to that of a computer motherboard. Testing reveals SCP-003-1 to predate earliest known circuit boards by a factor of thousands of years. SCP-003-1 is considered sentient but not actively dangerous except under certain conditions.</p>
                            <p>SCP-003-1 was found on a stone tablet, SCP-003-2, on which it currently resides. The runes on SCP-003-2 are not part of any known language, and emit pale, flickering light patterns.</p>
                            <p>SCP-003-2 is controlled by a (non-biological) internal computer, the contents of which are mostly inaccessible without risk of damaging SCP-003-2. SCP-003-2 is capable of controlled emissions of radiation, including heat, light, and anomalous radiation types. SCP-003-2 contains an internal power source of an anomalous nature, which appears to have been losing power since several centuries before discovery.</p>
                            <p>It is considered probable that SCP-003-2 was created for the purpose of containing SCP-003-1. Partially interpreted data recovered from SCP-003-2 may refer to a past and/or potential future LK-class restructuring event caused by SCP-003-1.</p>
                            <p>SCP-003 was located by remote viewing team SRV-04 Beta. It appears possible that SRV-04 Beta was deliberately contacted by SCP-003-2. Other organizations have also been alerted to SCP-003's existence, possibly by similar means. Despite this activity, SCP-003-2 does not appear to be sentient, based on its lack of reaction to M03-Gloria analysis and procedures.</p>
                            <p>When SCP-003 drops below the temperature of 35°C, both components react.</p>
                            <p>First, SCP-003-1 enters a growth state characterized by an exponential increase in mass. This growth state consists of two stages. In both stages, SCP-003-1 partially fuels its growth by converting matter around it, starting with any surrounding inorganic material, including atmospheric elements, then nonliving organic material, including cells of dead skin, hair, chitin, enamel, keratin, and other biological materials.</p>
                            <p>The first stage is always the same. SCP-003-1 will first increase its mass, then take a form similar in shape to an ophiuroid (brittle star) of fifteen meters in diameter (including what appears to be a central processor of three meters in diameter). It will form sensory organs that appear to scan its surrounding environment, and will partially convert the area around it to an unidentified anomalous substance (SCP-003-2 seems immune from conversion).</p>
                            <p>The second stage describes a growth alteration which occurs when SCP-003 comes into contact with living organic material; SCP-003 appears to "template" itself off of the organic material, and will attempt communication with organisms that match its initial "template" or "templates".</p>
                            <p>In its second stage, SCP-003-1 may pause, slow or change its growth, and will also convert inorganic and nonliving organic elements into functionally similar structures while anomalously altering their physical makeup.</p>
                            <p>While growth is consistent in the first stage, in the second stage SCP-003-1's growth rate is diminished by 20-90% so long as SCP-003-1 remains in contact with living organic material. The percentage is determined by the complexity of the organism(s) in contact with SCP-003-1; SCP-003-1 appears to devote a large amount of processing power to analysis of living organic material.</p>
                            <p>During each of SCP-003-1's growth stages, SCP-003-2 releases bursts of radiation that temporarily inhibit SCP-003-1's growth, or reverse this growth when the temperature of SCP-003-1 rises above 100°C. Similar radiation emissions have been replicated or recorded via other anomalous means.</p>
                            <p>SCP-003-1's biology has been the subject of extensive study. Significant elements have been identified similar to SCP-███, SCP-1512, and SCP-2756, the latter two of which have no further confirmed connection with SCP-003-1 and no known connection with each other, and none of which are fully understood (technically, even less understood than SCP-003, thanks to the extensive cross-disciplinary research on the SCP-003 objects). To date, no convincing analysis has been put forward which satisfactorily explains SCP-003-1's connection to these SCP objects or others, nor its connection to modern technology beyond appearance (and potential mimicry via unknown mechanism).</p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A large, pulsing, organic mass that resembles a motherboard made of flesh and circuitry. Normally stable when cooled, if SCP-003-1 begins to overheat, it enters an aggressive growth phase, rapidly consuming and integrating surrounding organic matter. This entity has a strange, insidious intelligence, adapting quickly to threats and absorbing anything it can reach.`,
                        "HP": `20 (4d6+4)`,
                        "Morale": `12 ("Driven by a need to grow; relentless in its pursuit of organic matter")`,
                        "Armor": "3 (Dense, adaptive organic material)",
                        "Speed": "Slow",
                        "Attack": `Organic Assimilation: D6 damage + special`,
                        "SpecialAbilities": `
                                <p><b>Organic Assimilation (Attack):</b> SCP-003-1 extends tendrils to absorb organic matter within a 10-foot radius. Each creature in this area must pass a Toughness DR 14 check or be partially absorbed, taking D6 damage. If a creature is killed by this effect, SCP-003-1 consumes the body, healing D4 HP and gaining a +1 to its Armor for 1d4 rounds as it integrates the victim’s biomass.</p>
                                <p><b>Rapid Growth Phase:</b> If SCP-003-1 overheats (typically triggered by removing SCP-003-2 or intense fire), it begins expanding at an alarming rate, covering an area of 5 feet per round. Creatures caught in this expanding mass must make an Agility DR 12 check each round to avoid being engulfed. Engulfed creatures take D4 damage each round until freed.</p>
                                <p><b>Adaptive Armor:</b> For each different type of damage SCP-003-1 sustains, it adapts, gaining +1 Armor against that specific type for the rest of the encounter. This adaptation can stack up to a maximum of +4 Armor against any single damage type.</p>
                                <p><b>Self-Replication (Growth Spawns):</b> During its growth phase, SCP-003-1 can create smaller, independent growths called spawns. Each turn, roll a D6; on a 5 or 6, a spawn with HP 4, Armor 1, and D4 damage appears within 10 feet of SCP-003-1. Growth spawns aggressively attack nearby creatures, attempting to assimilate them into the main biomass.</p>
                                <p><b>Temperature Weakness:</b> SCP-003-1 requires SCP-003-2’s cooling mechanism to remain stable. Without this cooling, it enters its Rapid Growth Phase. If subjected to extreme cold, SCP-003-1 must make a Toughness DR 14 check each round or lose D4 HP as it attempts to halt its own expansion.</p>
                                `,
                        "Weakness": `<p>SCP-003-2 is a cooling apparatus necessary to keep SCP-003-1 in a dormant state. Any creature carrying SCP-003-2 within 5 feet of SCP-003-1 can calm its growth temporarily, halting its Rapid Growth Phase for 1d4 rounds.</p>
                                <p>SCP-003-1 is particularly vulnerable to cold. If exposed to freezing temperatures, it loses its adaptive abilities and suffers an additional D4 damage per round.</p>
                                `,
                    }
                }
            }
        },
        {//SCP 005
            "id": "SCP005",
            "name": "SCP 005 - The Skeleton Key",
            "safety_class": "Safe",
            "image": "images/SCP-005_img.webp", // Static image for this SCP
            "info": {
                "": {
                    "containment": "SCP-005 poses no immediate risk in any direct sense. Even so, its unique functions require special measures be taken to restrict access and manipulation of the object. Approval of at least one (1) Level 4 personnel is required for the removal of the object from its containment area.",
                    "description": "In appearance, SCP-005 resembles an ornate key, displaying the characteristics of a typical mass produced key used in the 1920s. The key was discovered when a civilian used it to infiltrate a high security facility. SCP-005 seems to have the unique ability to open any and all forms of lock (See Appendix A), be they mechanical or digital, with relative ease. The origin of this ability has yet to be determined.",
                    "additional": `<p><b>Additional Notes:</b> SCP-005 may be used as a replacement for lost security passes, but only under the supervision of at least one (1) Level 4 personnel. SCP-005 may not be used for vending machine repairs, opening lockers, or for any personnel's spare home key. Removal of the object from the compound will result in immediate termination.</p>
                                   <p><b>Appendix A:</b> While SCP-005 has been shown to be effective in removing almost any form of locking device, further experiments have shown that efforts to disguise the purpose or identity of a lock have proven at least somewhat successful in defeating SCP-005's ability. In approximately 50% of cases where a volunteer was not able to identify a locking device as such, SCP-005 was not successful in deactivating the device. Due to these results, SCP-005 has been tentatively classified as 'sentient' and further tests are being run to determine its cognitive abilities. However, there are no results that show any traits that prevent it from being able to identify any particular locking device, only that the aforementioned device has been heavily concealed and disguised.</p>
                                    `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A weathered, seemingly ordinary key with a slight tarnish. It feels heavier than it looks, and its handle is engraved with faint, strange symbols that shift when glanced at from different angles. The Skeleton Key is rumored to open any lock, from the mundane to the mystical, and those who wield it may find themselves in both fortune and peril.`,
                        "Other": `
                                <p><b>Universal Unlock:</b> The Skeleton Key can unlock any lock, physical or magical, without fail. This includes doors, chests, cages, and even enchanted or cursed locks. To use the Skeleton Key, simply insert it into any lock and turn—it will adjust its shape to fit the mechanism perfectly. This action does not require a roll; the lock will click open instantly.</p>
                                <p><b>Mystical Awareness:</b> The Skeleton Key has a strange, almost sentient awareness of what it is unlocking. Each time it is used, roll a d6. On a 1, the key "rejects" the lock, refusing to turn and remaining firmly in place. This rejection often occurs when unlocking something of immense importance or great evil, as if the key itself hesitates to allow access.</p>
                                <p><b>Curse of Attention:</b> Wielding SCP-005 attracts both mundane thieves and magical beings who covet its power. Those who possess the key are more likely to encounter thieves, cultists, or creatures who sense the Skeleton Key’s presence and wish to take it for themselves. Whenever players rest in a populated area, there’s a 1-in-4 chance that someone will attempt to steal the key.</p>
                                <p><b>Unlocks Doors to the Unknown:</b> Occasionally, SCP-005 may open "doors" that don’t exist in the current plane. When used on certain ancient or cursed locks, it might open a portal to an unknown location—another dimension, a nightmarish labyrinth, or a pocket realm of an ancient creature. If this happens, roll a Presence DR12; on a failure, the keyholder is pulled into the unknown location, and the portal closes behind them.</p>
                                <p><b>Random Malfunctions:</b> The Skeleton Key is not entirely reliable. Each time it is used, roll a d6. On a 1, the key "short-circuits," refusing to open the lock and rendering itself inert for 1d4 hours. During this time, it will not function on any lock, forcing its bearer to find alternative means of entry.</p>
                                <p><b>Unleashes Locked Curses:</b> SCP-005 does not discriminate between locks, meaning it may also unlock magical seals or curses designed to imprison dangerous entities or artifacts. If the Skeleton Key is used to unlock a magical or enchanted lock, roll a Presence DR14; on a failure, a hostile creature or dark curse is unleashed as the seal breaks. This could range from minor hexes (such as -1 to all rolls for 24 hours) to the release of ancient, imprisoned spirits.</p>
                                `
                    }
                }
            }
        },
        {//SCP 009
            "id": "SCP009",//"SCP000"
            "name": "SCP 009 - Red Ice",
            "safety_class": "Euclid",
            "image": "images/SCP-009_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `Object is to be contained within a sealed storage tank of heat-resistant alloy with dimensions not less than 2m x 2m x 2m.
                        <p>Under no circumstances should SCP-009 be exposed to temperatures in excess of 0°C when not undergoing testing, and no water-based solutions shall be allowed within 30 meters of the object's containment area. Object's chamber is to be fitted with temperature sensors which must be monitored at all times, and is to be kept refrigerated by no fewer than three (3) redundant cooling units. Any malfunction of sensors, or of coolant systems, is to be reported and repaired immediately. If at any time the temperature in the containment area climbs above -5°C, the chamber is to be locked down and flooded with coolant until temperatures return to safe levels (-30°C to -25°C).</p>
                        <p>Containment area is to be kept in total vacuum during testing, and personnel interacting with SCP-009 must wear full environmental protection gear. Following testing, all equipment, personnel, and other materials must undergo dehydration procedures and be quarantined for no less than 12 hours. Any moisture found displaying properties of SCP-009 is to be quarantined and added to the containment area as soon as possible. Living organisms found to be contaminated by SCP-009 are to be terminated by chemical dessication and extracted molecules of SCP-009 added to containment.</p>
                    `,
                    "description": `SCP-009 is approximately ███ liters of a substance which superficially resembles distilled water (H2O), except with a distinct bright red hue. This red hue is discernible in all phases, and serves as the most expedient method of identifying contaminated matter before its anomalous properties manifest. In contrast to mundane water, SCP-009 assumes a liquid phase at temperatures between -100°C and 0°C, and a solid state above those temperatures. At temperatures below -100°C, SCP-009 vaporizes into a gaseous phase similar to steam.`,
                    "additional": `<p>Examinations of the atomic structure of SCP-009 have proved inconclusive. The substance appears to be identical to normal water molecules, with the exception of [REDACTED] in contrast to standard laws of enthalpy. Dr. █████, Site ██'s resident expert on Xenospatial Physics suggests that SCP-009 may originate in a universe with alternate physical laws.</p>
                        <p>The most hazardous property of SCP-009, however, is its ability to contaminate normal H2O. When in contact with any aqueous solution, SCP-009 will, through unknown mechanisms, transfer its anomalous properties to other objects and creatures. Testing has shown it capable of assimilating ice, steam, tea, fruit juice, seawater, blood, and [DATA EXPUNGED]. The time it takes for this process to occur varies depending on temperature and the exact chemical composition of affected matter, and had been observed as taking between 3 minutes and ██ hours.</p>
                        <p>Experiments on D-Class personnel have illustrated the process of conversion by the substance, which has been found to follow a consistent pattern:</p>
                        <p>1. Initial Exposure: Subject is exposed to SCP-009, and it begins assimilating any moisture present on the exposed surface. Creatures in this stage do not commonly notice any unusual symptoms except for a slight warming sensation.</p>
                        <p>2. Surface Conversion: Frost begins to form on the exposed area as the heat produced by the subject and SCP-009 itself raises its temperature above 0°C. This stage can take anywhere from one (1) minute to █ hours, during which time subjects begin to feel [REDACTED] crystals from the epidermis.</p>
                        <p>3. Deep Tissue Conversion: Exponential increase in temperature of SCP-009 causes runaway reaction throughout subject's body, resulting in [REDACTED]. Actual blood loss is minimal due to ice crystals [REDACTED], allowing subjects to remain alive and conscious for up to ██ hours.</p>
                        <p>4. [DATA EXPUNGED]</p>
                        `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A pool of crimson, crystalline ice with a sickly red hue, SCP-009 seems like ordinary frozen water until it spreads. Any water it touches quickly transforms, freezing solid, and any creature that touches it begins to experience a horrifying, irreversible crystallization. The cursed ice spreads relentlessly, unstoppable and hungry.`,
                        "Other": `<p><b>HP:</b> Indestructible under normal means; only extreme heat can melt it temporarily</p>
                                <p><b>Armor:</b> 3 (Supernaturally cold and resilient)</p>
                                <p><b>Spread Rate:</b> Expands 5 feet per round across any liquid, converting it to red ice</p>
                                <p><b>Freezing Corruption (Touch Effect):</b>Any creature or object that comes into direct contact with SCP-009 is infected with its corrupting ice. The creature must make a Toughness DR 14 check. On a failure, their skin and fluids begin to freeze, dealing D6 cold damage immediately and 1 HP damage per round until they find a source of extreme heat to halt the spread.
                                    <ul>
                                        <li><b>Secondary Spread:</b> If an infected creature touches another living creature, the ice spreads, forcing the new target to make a Toughness DR 14 check or be affected in the same way.</li>
                                    </ul>
                                </p>
                                <p><b>Infectious Expansion:</b> SCP-009 rapidly spreads across any nearby water sources, freezing them within seconds. Every round, SCP-009 expands 5 feet in all directions where there is water, converting it to red ice. Once frozen, this area remains permanently affected, with the ice capable of transferring the corruption to anyone who touches it.</p>
                                <p><b>Mortal Cold:</b> Creatures within a 10-foot radius of SCP-009 must make a Toughness DR 12 check each round or take D2 cold damage from the intense chill radiating off the ice.</p>
                                <p><b>Unnatural Resilience:</b> SCP-009 cannot be melted through ordinary means. Only extreme heat (such as fire magic or a furnace) can melt portions of the ice temporarily, slowing its spread for 1d4 rounds. Even melted portions of SCP-009 refreeze within seconds if not kept in continuous, intense heat.</p>
                                `,
                        "Weakness": `<p>Only extreme, continuous heat can prevent SCP-009 from spreading. When exposed to sustained, powerful heat, SCP-009’s spread rate is halted, and creatures infected by SCP-009’s ice can halt the spread within their bodies with a successful Toughness DR 12 check.</p>
                                <p>A thick line of salt surrounding SCP-009’s perimeter can slow its spread by creating a temporary barrier (lasting for 1d4 hours).</p>`,
                    }
                }
            }
        },
        {//SCP 035
            "id": "SCP035",//"SCP000"
            "name": "SCP 035 - The Possessive Mask",
            "safety_class": "Keter",
            "image": "images/SCP-035_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-035 is to be kept within a hermetically sealed glass case, no fewer than 10 centimeters (4 inches) thick. This case is to be contained within a steel, iron and lead-shielded room at all times. Doors are to be triple-locked at all times, with the exception of allowing personnel in or out. No fewer than two (2) armed guards are to be posted at any time. Guards must remain outside at all times and are not allowed within the containment room under any circumstances. A trained psychologist is to remain on site at all times. Research personnel are not to touch SCP-035 at any time. SCP-035 must be moved to a new sealed case every two (2) weeks. The previous case must be disposed of via SCP-101, as it shows no adverse reactions to SCP-035's “corruption”. Anyone who comes into contact with SCP-035 when it is in possession of a host is to be given an immediate psychological evaluation.`,
                    "description": `SCP-035 appears to be a white porcelain comedy mask, although, at times, it will change to tragedy. In these events, all existing visual records, such as photographs, video footage, even illustrations, of SCP-035 automatically change to reflect its new appearance.`,
                    "additional": `<p>A highly corrosive and degenerative viscous liquid constantly seeps from the eye and mouth holes of SCP-035. Anything coming into contact with this substance slowly decays over a period of time, depending on the material, until it has decayed completely into a pool of the original contaminant. Glass seems to react the slowest to the effects of the item, hence the construction choice of its immediate container. Living organisms that come into contact with the substance react much the same way, with no chance of recovery. Origin of the liquid is unknown. Liquid is only visible from the front, and does not emerge or is even visible from the other side.</p>
                                <p>Subjects within 1.5 to 2 meters (5-6 feet) of SCP-035, or in visual contact with it, experience a strong urge to put it on. When SCP-035 is placed on the face of an individual, an alternate brain wave pattern from SCP-035 overlaps that of the original host, effectively snuffing it out and causing brain death to the subject. Subject then claims to be the consciousness contained within SCP-035. The bodies of "possessed" subjects decay at a highly accelerated rate, eventually becoming little more than mummified corpses. Nevertheless, SCP-035 has demonstrated the ability to remain in cognitive control of a body experiencing severe structural damage, even if the subject's body literally decays to the point where motion is not mechanically possible. No effect is found to be had when placed on the face of an animal.</p>
                                <p>Conversations with SCP-035 have proven to be informative. Researchers have learned various details about other SCP objects and history in general, as SCP-035 claims to have been at many momentous events. SCP-035 displays a highly intelligent and charismatic personality, being both amiable and flattering to all those who speak with it. SCP-035 has scored in the 99th percentile on all intelligence and aptitude tests administered to it, and appears to have a photographic memory.</p>
                                <p>However, psychological analysis has discovered SCP-035 to possess a highly manipulative nature, capable of forcing sudden and profound changes to interviewer's psychological state. SCP-035 has proven to be highly sadistic, prompting some to commit suicide and transforming others into near-mindless servants with linguistic persuasion alone. SCP-035 has stated that it has intimate knowledge of the workings of the human mind and implied that it could change anyone's views if given enough time.</p>
                                `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A white porcelain comedy mask with an eternally smiling face. Its expression never changes, yet it seems to communicate emotions through an unseen force. When worn, it grants intelligence and power but ultimately consumes its host.`,
                        "HP": `10 (when possessing a host, uses host’s HP)`,
                        "Morale": `Immune (will not retreat; seeks only to find and manipulate new hosts)`,
                        "Armor": "3 (Porcelain mask, resistant to minor damage)",
                        "Speed": "As host’s speed",
                        "Attack": `Possession: Special`,
                        "SpecialAbilities": `
                                <p><b>Possession (Attack):</b> When placed on a creature's face, SCP-035 takes control of the host's mind and body. The creature must make a Toughness DR 14 check; on a failure, they become fully possessed, and SCP-035 controls all of their actions. Once possessed, the host's body begins to decay rapidly, suffering 1 HP damage per hour until they either perish or the mask is removed (which requires extreme force or specific rituals).</p>
                                <p><b>Mental Manipulation:</b> If SCP-035 is in close proximity (within 10 feet), it can attempt to charm or influence any creature by speaking to them in a mesmerizing, persuasive voice. Targets must succeed on a Presence DR 12 check or be compelled to do its bidding for the next 1d4 rounds. This could include removing armor, giving it items, or even putting on the mask.</p>
                                <p><b>Decay Aura:</b> Any creature within 5 feet of SCP-035 while it is worn suffers an aura of rot and decay. Each round, all creatures within this range must make a Toughness DR 12 check or take D2 damage as their skin blisters and their health weakens from the mask’s corrosive influence.</p>
                                <p><b>Insidious Knowledge:</b> SCP-035 whispers dark secrets and eldritch knowledge to its host, granting them strange abilities. While possessed, the host gains +2 to all Presence-based rolls but takes 1d4 damage per day from mental strain and horror. Additionally, the host may learn unnatural spells or forbidden lore that remains in their mind even after the mask is removed—if they survive.</p>
                                `,
                        "Weakness": `<p>SCP-035 can only be removed by a powerful ritual (Presence DR 16), holy relic, or forceful means (risking severe harm to the host). Each attempt to remove the mask deals D6 damage to the host as it fights to stay attached.</p>
                                <p>SCP-035 is highly flammable; fire-based attacks deal double damage to the mask, though this risks damaging the host as well.</p>`,
                    }
                }
            }
        },
        {//SCP 040
            "id": "SCP040",//"SCP000"
            "name": "SCP 040 - Evolution's Child",
            "safety_class": "Euclid",
            "image": "images/SCP-040_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-040-1a, 1c, and 1j have been approved to remain in the containment chamber with SCP-040 for purposes of the subject’s mental well-being. (Security Chief Special Order 392-5: ██/██/██). All other entities modified by SCP-040 during testing are to be disposed of after study according to standard biological specimen clearance protocols, as outlined in Document CDP-BIO-EN-1.
                        <p><b>Standard Containment Policies:</b>
                        <ul>
                            <li>Two-person residential module (no amenity restrictions)</li>
                            <li>Access to site library, recreational facilities, cafeteria, and public areas (supervised)</li>
                            <li>Dietary restriction (mild peanut allergy)</li>
                            <li>Youth educational curriculum enrollment (Drs. Abernathy, Logan, and Izawa)</li>
                            <li>Bi-weekly psychological review (Dr. Abernathy)</li>
                            <li>Schedule B experimentation plan</li>
                        </ul>
                        </p>
                        `,
                    "description": `SCP-040 is a human child capable of at-will manipulation of the physical characteristics of living organisms. Modified organisms are collectively referred to as SCP-040-1.`,
                    "additional": `<p>Modifications are primarily cosmetic, ranging from simple color and pattern changes to more involved shifts in bodily form and structure. The creation of new specialized organs is possible, but appears to be the limit of SCP-040’s ability and currently has a 66% failure rate in testing. Modifications are limited to what would be physically possible (regardless of the probability of such a feature naturally arising) – for example, while SCP-040 can grant an organism wings that does not naturally possess them, they will not permit the creature to fly without meeting other physical requirements. SCP-040-1 undergo behavior shifts as part of the modification process, acting with extreme loyalty to SCP-040 regardless of prior association.</p>
                                <p>SCP-040’s anomalous property requires significant focus and time to enact and causes intense headaches and nausea when performed for more than a few minutes at a time. The effect becomes increasingly unreliable and inaccurate the smaller the modifications or more complex the changes are. SCP-040 is incapable of altering microscopic organisms, and has great difficulty in altering plant life. Dead organic matter may also be used, but must be used in conjunction with a living organism. Instances of SCP-040-1 cannot be modified more than once, though it is currently unknown if this is a hard limit of SCP-040’s properties, or from a lack of mastery over them.</p>
                                <p>SCP-040’s emotional state is within acceptable boundaries for an individual of its age group, accounting for the effects of prolonged containment and parental seperation. Subject’s intelligence is slightly above-average for its age group. Behavior is generally cooperative. SCP-040 acclimatized quickly to containment, and responded well to the initial orientation and socialization programs. SCP-040 responds to the name "Forty", and does not appear to have any other given or chosen personal name.</p>
                                <p><b>Recovery Summary:</b> Subject was taken into custody on ██/██/2008 as part of the raid on the Keys to the Kingdom Christian Charter School for Gifted Youth in [REDACTED], Colorado. The raid’s primary objective, being the capture or execution of █████ ██████, a former CIA operative who had previously worked alongside Foundation intermediaries as part of Project Blackbook, Project Smilodon and Operation STARGATE from 1967 – 1971, was successful. ██████ was terminated on site and disposed of without incident.</p>
                                <p>Of the 15 children recovered from the facility, SCP-040 was the only one to demonstrate anomalous properties: the others were administered amnestics and placed in Foundation-observed foster care. Interviews with staff at the school revealed that they were unaware of ██████’s prior history or any connection with Foundation operations. They were administered amnestics and put under a sixth-month communications monitor – no relapses were recorded.</p>
                                <p>See Operation TATZELWURM after-action report for complete event record.</p>
                                `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `SCP-040, also known as "Evolution’s Child," is a frail young girl with an unsettling power over life itself. Her physical form is as delicate as her mental state, and she is often seen nervously clutching hairpieces made from strange materials, used to suppress her biokinetic abilities. Despite her gentle demeanor, her subconscious power to alter living matter can create twisted and unnatural creatures.`,
                        "HP": `10 (2d6+3)`,
                        "Morale": `8 ("Nervous and fearful, likely to retreat or panic under stress")`,
                        "Armor": "0 (fragile and sensitive to touch)",
                        "Speed": "Slow",
                        "Attack": `Biokinesis: Alters or creates living organisms near her: Special`,
                        "SpecialAbilities": `
                                <p><b>Biokinesis (Attack):</b> SCP-040 can manipulate living creatures within 10 feet, creating new SCP-040-1 instances (hybrid lifeforms) through subconscious or intentional will. This ability requires 2 rounds of uninterrupted concentration. After each use, SCP-040 must pass a Toughness DR 12 check or suffer a -1 penalty to all rolls for 1d4 hours due to exhaustion. Creatures altered this way are unnaturally loyal to SCP-040 and defend her against threats.</p>
                                <p><b>SCP-040-1 Instances (Hybrid Creatures):</b> SCP-040 is often accompanied by up to 1d3 SCP-040-1 instances at any time. Each is a bizarre combination of animals, loyal to SCP-040, and may have one unique ability based on its traits. Examples include:
                                    <ul>
                                        <li><b>SCP-040-1a (Symbiotic Jacket):</b> A shape-shifting organism resembling a jacket or cloak. It grants SCP-040 light camouflage, causing any attack directed at her to suffer a -1 penalty to hit.</li>
                                        <li><b>SCP-040-1c (Musical Sphere):</b> A floating creature with a spherical body and flexible limbs. Once per round, it emits a soothing tune, forcing enemies within 15 feet to pass a Morale DR 10 check or hesitate, taking a -1 penalty to attacks for the next round.</li>
                                        <li><b>SCP-040-1j (Climbing Beast):</b> SCP-040-1j (Climbing Beast): A grotesque, quadrupedal creature covered in thick blue and pink fur. The Climbing Beast has no eyes and a broad, toothless mouth. With its sticky limbs, it can effortlessly scale vertical surfaces, often serving as a mount for SCP-040.
                                            <ul>
                                                <li><b>HP:</b> 8</li>
                                                <li><b>Morale:</b> 12 ("Loyal to SCP-040; will protect and follow her commands until destroyed")</li>
                                                <li><b>Armor:</b> 1 (Thick fur and hide)</li>
                                                <li><b>Speed:</b> Normal (on ground), Fast (when climbing)</li>
                                                <li><b>Attack:</b> Crushing Bite: D4 damage</li>
                                            </ul><ul>
                                                <li><b>Sticky Limbs:</b> The Climbing Beast can cling to and scale vertical surfaces effortlessly. It moves at Fast speed when climbing and can carry SCP-040 or another small creature on its back. If in combat while climbing, enemies attempting to strike it must pass an Agility DR 12 check or fall from their position.</li>
                                                <li><b>Blind, but Heightened Senses:</b> Though eyeless, the Climbing Beast has acute hearing and smell. It cannot be easily surprised and gains +2 to all Morale checks to detect nearby threats within 30 feet.</li>
                                                <li><b>Protective Loyalty:</b> The Climbing Beast will interpose itself between SCP-040 and any attackers within reach. When SCP-040 is targeted by an attack, there is a 50% chance the Climbing Beast intercepts it, taking the hit instead.</li>
                                            </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </p>
                                <p><b>Subconscious Mutation:</b> Due to her lack of control, SCP-040 may unintentionally trigger her powers when under extreme stress. If SCP-040 suffers damage or fails a Morale check, roll a D6; on a 1-3, she subconsciously activates Biokinesis, creating a random SCP-040-1 creature (GM’s choice) as a defensive reflex. Each time this happens, she must pass a Presence DR 14 check or suffer a panic attack, gaining -1 to all Presence-based rolls until calmed.</p>
                                <p><b>Fragile Physiology:</b> SCP-040’s body is sensitive and easily injured. Any physical attack that lands on SCP-040 has a 1-in-6 chance to deal double damage due to her brittle skin and fragile bones. Additionally, prolonged exposure to bright light causes her 1 HP damage per hour unless she finds shelter or shade.</p>
                                <p><b>SCP-148 Hairpieces (Power Suppression):</b> SCP-040 wears small hairpieces made of SCP-148, a rare material that dampens her powers. These hairpieces reduce the likelihood of Subconscious Mutation by 50% (only occurs on a roll of 1-2 out of 6). If the hairpieces are lost or removed, SCP-040’s biokinesis becomes more unstable, causing Subconscious Mutation on a roll of 1-4.</p>
                                `,
                        "Weakness": `<p>Due to her repressed powers and anxiety, SCP-040 suffers double damage from Presence-based spells or effects targeting the mind.</p>
                                <p>Each time SCP-040 consciously activates Biokinesis, she must rest for at least 1d4 hours or suffer a cumulative -1 penalty to all rolls due to mental and physical fatigue.</p>
                                <p>SCP-040 is easily frightened and avoids direct combat. In dangerous situations, she will often rely on her SCP-040-1 creatures for protection or attempt to escape if possible.</p>`,
                    }
                }
            }
        },
        {//SCP 049
            "id": "SCP049",
            "name": "SCP 049 - Plague Doctor",
            "safety_class": "Euclid",
            "image": "images/SCP-049_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-049 is contained within a Standard Secure Humanoid Containment Cell in Research Sector-02 at Site-19. SCP-049 must be sedated before any attempts to transport it. During transport, SCP-049 must be secured within a Class III Humanoid Restriction Harness (including a locking collar and extension restraints) and monitored by no fewer than two armed guards.
                                <p>While SCP-049 is generally cooperative with most Foundation personnel, outbursts or sudden changes in behaviour are to be met with elevated force. Under no circumstances should any personnel come into direct contact with SCP-049 during these outbursts. In the event SCP-049 becomes aggressive, the application of lavender (L. multifida) has been shown to produce a calming effect on the entity. Once calmed, SCP-049 generally becomes compliant, and will return to containment with little resistance.</p>
                                <p>In order to facilitate the ongoing containment of SCP-049, the entity is to be provided with the corpse of a recently deceased animal (typically a bovine or other large mammal) once every two weeks for study. Corpses that become instances of SCP-049-2 are to be removed from SCP-049's containment cell and incinerated. SCP-049 is no longer permitted to interact with human subjects, and requests for human subjects are to be denied.</p>
                                <p><b>Temporary Containment Procedure Update:</b>Per Containment Committee Order 049.S19.17.1, SCP-049 is no longer permitted to interact directly with any members of Foundation staff, nor is it to be provided with any additional corpses to be used in its surgeries. This order shall persist indefinitely, until such time a consensus regarding the ongoing containment of SCP-049 can be reached.</p>
                                `,
                    "description": `SCP-049 is a humanoid entity, roughly 1.9 meters in height, which bears the appearance of a medieval plague doctor. While SCP-049 appears to be wearing the thick robes and the ceramic mask indicative of that profession, the garments instead seem to have grown out of SCP-049's body over time1, and are now nearly indistinguishable from whatever form is beneath them. X-rays indicate that despite this, SCP-049 does have a humanoid skeletal structure beneath its outer layer.`,
                    "additional": `<p>SCP-049 is capable of speech in a variety of languages, though tends to prefer English or medieval French2. While SCP-049 is generally cordial and cooperative with Foundation staff, it can become especially irritated or at times outright aggressive if it feels that it is in the presence of what it calls the "Pestilence". Although the exact nature of this Pestilence is currently unknown to Foundation researchers, it does seem to be an issue of immense concern to SCP-049.</p>
                                <p>SCP-049 will become hostile with individuals it sees as being affected by the Pestilence, often having to be restrained should it encounter such. If left unchecked, SCP-049 will generally attempt to kill any such individual; SCP-049 is capable of causing all biological functions of an organism to cease through direct skin contact. How this occurs is currently unknown, and autopsies of SCP-049's victims have invariably been inconclusive. SCP-049 has expressed frustration or remorse after these killings, indicating that they have done little to kill "The Pestilence", though will usually seek to then perform a crude surgery on the corpse using the implements contained within a black doctor's bag it carries on its person at all times3. While these surgeries are not always "successful", they often result in the creation of instances of SCP-049-2.</p>
                                <p>SCP-049-2 instances are reanimated corpses that have been operated on by SCP-049. These instances do not seem to retain any of their prior memories or mental functions, having only basic motor skills and response mechanisms. While these instances are generally inactive, moving very little and in a generally ambulatory fashion, they can become extremely aggressive if provoked, or if directed to by SCP-049. SCP-049-2 instances express active biological functions, though these are vastly different from currently understood human physiology. Despite these alterations, SCP-049 often remarks that the subjects have been "cured".</p>
                                `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A tall, eerie figure clad in the garments and mask of a medieval plague doctor. It moves with calm deliberation, exuding an aura of dread and mystery. SCP-049 speaks softly of “The Pestilence,” an affliction it alone claims to understand and “cure.” However, this cure is lethal, transforming its victims into reanimated servants, bound to its will. SCP-049’s touch is as deadly as its intentions, and it strikes with a disturbing calmness in pursuit of its “treatment.”`,
                        "HP": 14,
                        "Morale": "10 (resolute in its mission to eradicate “The Pestilence”)",
                        "Armor": "2 (thick, ceremonial robes resistant to ordinary damage)",
                        "Speed": "Slow and deliberate",
                        "Attack": `Touch of Death – 1d8 necrotic damage on a successful melee hit (Agility DR10 to avoid)`,
                        "SpecialAbilities": `
                                <p><b>Touch of Death:</b> SCP-049 delivers a deadly “cure” through direct contact, channeling necrotic energy that kills nearly instantly.
                                    <ul>
                                        <li><b>Effect:</b> If SCP-049 successfully touches a creature in close range, the target takes 1d8 necrotic damage (Agility DR10 to avoid).</li>
                                        <li><b>Instant Death:</b> If this damage reduces a creature to 0 HP, they are killed outright, allowing SCP-049 to prepare them for reanimation.</li>
                                    </ul>
                                </p>
                                <p><b>Necrotic Reanimation:</b> After killing a creature, SCP-049 can “treat” the body, transforming it into a reanimated servant.
                                    <ul>
                                        <li><b>Effect:</b> Reanimated servants, called “cured,” rise under SCP-049’s command. They lack free will and follow SCP-049’s orders without question.</li>
                                        <li><b>Servant Stats:</b>
                                            <ul>
                                                <li><b>HP:</b> 6</li>
                                                <li><b>Armor:</b> 1 (decayed but hardened flesh)</li>
                                                <li><b>Attack:</b> Clumsy Slam – 1d4 damage</li>
                                                <li><b>Special:</b> Immune to pain and morale checks, and resistant to typical undead vulnerabilities.</li>
                                            </lu>
                                        </li>
                                    </ul>
                                </p>
                                <p><b>Aura of Despair:</b> SCP-049’s presence induces an oppressive sense of dread, affecting those nearby.
                                    <ul>
                                        <li><b>Effect:</b> Anyone within 10 feet of SCP-049 must make a Morale DR12 check at the start of combat. Failure results in -1 to all rolls for the encounter due to a pervasive sense of doom.</li>
                                    </ul>
                                </p>
                                <p><b>Unsettling Knowledge:</b> SCP-049 has an in-depth, if disturbing, understanding of diseases, curses, and decay.
                                    <ul>
                                        <li><b>Effect:</b> SCP-049 has +2 to Presence rolls when diagnosing afflictions. Its descriptions are grim and unsettling, and characters listening to SCP-049 too long must roll Presence DR10 to avoid feeling a lingering dread or fatalism.</li>
                                    </ul>
                                </p>
                                <p><b>Immunity to Disease:</b> SCP-049 is immune to all diseases, poisons, and curses, considering itself a protector against infection and corruption.</p>
                                `,
                        "Weakness": `<p>SCP-049 can be subdued through tranquilizers and contained by keeping it isolated, as it becomes docile when not directly engaged in its "curing."</p>`,
                    }
                }
            }
        },
        {//SCP 063
            "id": "SCP063",
            "name": "SCP 063 - The World's Best TothBrush",
            "safety_class": "Safe",
            "image": "images/SCP-063_img.jpg", // Static image for this SCP
            "info": {
                "": {
                    "containment": `SCP-063 is to be kept at all times within Dr. ████'s personal bathroom, located within the personnel quarters upon Site 19. Object is to be used as designed at least once in a twenty-four (24) hour period or the object will begin to emit an unknown specialized radiation that results in objects and material within a 0.6 m (2 ft) radius being slowly warped and eventually disintegrating into a fine dust. Radiation's effect on living test subjects has not been monitored.`,
                    "description": `SCP-063 appears to be an average, pale blue toothbrush. Stenciled along the side of the object are the words “The World's Best TothBrush [sic]”. The word "toothbrush" is spelled incorrectly, though whether this was accidental or a purposeful action by the creators of the object is unknown. SCP-063 displays the ability to effortlessly cleave through any and all dead or inorganic matter, the focal point of this ability being the bristles. However, matter touched by the bristles is not separated, such as by way of a knife, but completely expunged from existence, leaving no trace whatsoever. This mode of operation is reminiscent of SCP-2207, suggesting the two anomalies share a connection or were created by the same entity or entities. Additionally, subjects who have used SCP-063 have claimed that the experience left their teeth feeling remarkably clean. In spite of its extraordinary abilities, lab analysis has discerned that SCP-063 is completely made of common plastic.`,
                    "additional": `<p><b>Addendum:</b> SCP-063 was originally found in St. Petersburg, on the person of █████████, a thief working in the area using SCP-063's abilities to crack safes. When questioned about the object, subject professed ignorance, claiming that he simply “found” the object one day. Questioning of the subject continued, until he took his own life. His reason for doing this is, as of yet, unknown.</p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `An innocuous-looking toothbrush labeled in crude writing as “The World’s Best Toothbrush.” Despite its humble appearance, this strange object has the ability to erase nearly any material it touches, leaving only a smooth void where once there was matter. Rumors say it was made by a mad sorcerer seeking to remove all blemishes from his kingdom.`,
                        "Usage": "Can be used carefully to erase objects or recklessly to harm",
                        "SpecialAbilities": `
                                <p><b>Erase Material:</b> SCP-063 can “erase” almost any solid material with a brushing motion, disintegrating it smoothly. The material touched by the brush vanishes completely, leaving behind a flat, void-like surface. Roll Presence DR10 to control its erasing effect:
                                    <ul>
                                        <li><b>Success:</b> The player erases only what they intend, such as a portion of a wall or a small area on a door.</li>
                                        <li><b>Failure:</b> The brush acts unpredictably, erasing more than intended and potentially weakening nearby structures or damaging items.</li>
                                    </ul>
                                </p>
                                <p><b>Destructive Potential:</b> When used against objects like doors, walls, or barriers, the Erasing Brush can create holes or passages, bypassing obstacles that would be difficult to break through otherwise. Larger objects take longer to erase; for example, a thick stone wall might require several rounds of erasing to create a sizable hole.</p>
                                <p><b>Unstable Weapon:</b> Although SCP-063 is not a weapon, it can be used as one in dire situations. When used on a creature, the player must roll Agility DR12 to hit. On a successful hit, the brush erases part of the target’s flesh, dealing 1d10 damage as it disintegrates skin, muscle, or even bone.
                                    <ul><li><b>Side Effect:</b> Each time it is used as a weapon, roll a d6. On a 1, the brush erases part of the wielder’s equipment or even a part of themselves (such as a patch of skin or a finger), causing 1d4 damage to the user.</li></ul>
                                </p>
                                <p><b>Selective Erasure:</b> Strangely, the brush cannot erase teeth. If someone attempts to erase a skull or jawbone, the teeth remain untouched, seemingly floating in place until they fall or are brushed aside. This can create a haunting effect, as erased bodies leave behind grinning, toothy remains.</p>
                                <p><b>Indestructible:</b> The Erasing Brush itself is indestructible and cannot be damaged or worn down by any conventional means. It remains pristine no matter how much it is used, which has led many to believe it was crafted with some dark enchantment.</p>
                                <p><b>Risk of Uncontrolled Erasure:</b> Each time SCP-063 is used in a significant way (such as erasing a wall or attacking an enemy), roll a d20. On a natural 1, the brush activates on its own, erasing a random small area nearby—this could be part of the user’s armor, a valuable item, or even part of the environment (such as a step on a staircase). The GM should use this effect to keep players cautious and aware of its dangerous potential.</p>
                                `
                    }
                }
            }
        },
        {//SCP 076
            "id": "SCP076",
            "name": "SCP 076 - Able",
            "safety_class": "Keter",
            "image": "images/SCP-076_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `Containment Area 25b is to be located 200 m below sea level, tunneled out of solid bedrock in a seismologically stable area. Sole access to the containment facility is to be through a vertical elevator shaft separated every fifty (50) meters with a reinforced blast door, constructed of 20 cm thick material shielding. Elevator shaft shall be flooded with seawater when not in use.
                            <p>Containment Area 25b is to be constructed with the following components:
                                <ul>
                                    <li>An Outer Security Perimeter against outside threats, staffed by security personnel trained in close quarters battle and counter-intrusion tactics.</li>
                                    <li>An Administrative and Support Area (ASA) consisting of support facilities and living quarters for on-site personnel.</li>
                                    <li>A Primary Containment Zone (PCZ), consisting of a 7 m cube encased in 1.5 m of reinforced material. PCZ is to be designed to be flooded and drained as needed, and should remain filled with seawater unless access to contents is required.</li>
                                    <li>A 150 m "killing corridor" which is to be the sole access to the PCZ from the ASA (including water, power, drainage, and ventilation lines). The walls and floor of the corridor are to be reinforced in a similar manner to the PCZ, with the addition of an electric deterrence system capable of delivering a 20,000 volt shock.</li>
                                </ul>
                            </p>
                            <p>A security station located at the entrance to the killing corridor is to be staffed with no fewer than three (3) armed security personnel on watch at any one point in time. Armament is to include, but not be limited to, at least one (1) ███████ CIW system on a pintle mount with a clear line of sight down the corridor, with a plexiglass screen to protect the operator from thrown weapons.</p>
                            <p>In the event of a full breach, all on-site staff are to proceed immediately to the closest security station for weapons and armor distribution. Staff will remain at Alert Condition One until SCP-076-2 is confirmed neutralized. Should 90 minutes pass after declaration of full breach without a Stand Down order being given by Level 4 or higher personnel, Final Contingency Measures will be activated, flooding the entire facility in seawater and sealing off the access shaft for a minimum of 24 hours before retrieval is attempted. This will, by necessity, result in the deaths of all on-site staff.</p>
                            `,
                    "description": `SCP-076 consists of two components: a stone cube (SCP-076-1) and a humanoid entity contained within (SCP-076-2).`,
                    "additional": `<p>SCP-076-1 is a 3 m cube made of black speckled metamorphic stone. All surfaces outside and within SCP-076-1 are covered in deeply engraved patterns corresponding to no known civilizations. Radioisotope analysis indicates that the object is approximately ten thousand (10,000) years old. A door is located on one side, sealed with a lock 0.5 m in width, surrounded by twenty (20) smaller locks in a circular pattern. As of yet, none of the keys have been found, making the door impossible to lock once closed.</p>
                            <p>Interior temperature is approximately 93 Kelvin, and cannot be altered by any means, internal or external. Directly in the center of the room is a 2.13 m tall stone coffin, held in place and sealed shut by several chains of unknown make and substance, which are attached to the inner corners of SCP-076-1.</p>
                            <p>SCP-076-2 resembles a lean Semitic human male in his late twenties. Hair is black, and eyes are gray, skin tone olive. Subject is 1.96 m in height and 81.65 kg in weight. Numerous tattoos depicting arcane and occult iconography are present all over the body (mostly in the form of leering demonic faces) and ranges from subtle to openly ostentatious. Subject, when encased inside SCP-076-1, is technically dead.</p>
                            <p>However, occasionally SCP-076-2 will awaken, effectively "reanimating", complete with all vital processes needed to sustain a living human being. Subject will then attempt to leave SCP-076-1. If successful, subject will enter a trance state and seek out the nearest human being, ignoring all other living things in the process. Upon coming into contact with living humans, SCP-076-2 will enter a rage state in which it attempts to engage and kill all human beings encountered. To date, only the subject's death has been shown to be effective in ending these rampages.</p>
                            <p>Terminating SCP-076-2 is often problematic due to its significant physical abilities. Subject has superhuman strength and speed, and although not invulnerable, has shown a remarkable ability to ignore pain and shock, pressing on despite what would be debilitating wounds in normal humans. Prior encounters have shown that SCP-076-2 has the ability to (among other things):
                                <ul>
                                    <li>Rip through a reinforced steel security door over the course of four (4) minutes of sustained assault.</li>
                                    <li>Clear over 64 m of distance in under three (3) seconds.</li>
                                    <li>Take multiple .50 caliber BMG rounds to the head and survive for several minutes to continue killing, despite severe damage to the cerebellum.</li>
                                    <li>Swat handgun and assault-rifle caliber bullets out of the air with a length of steel rebar.</li>
                                    <li>Survive for over one (1) hour deprived of oxygen before finally asphyxiating.</li>
                                    <li>SCP-076-2's most unusual ability, however, is its ability to apparently materialize bladed weapons out of nowhere. Slow-motion video footage reveals that the blades in question are actually pulled from a miniature dimensional rift described as a "small hole in space." Where this portal leads is unknown, as is how SCP-076-2 is capable of generating said rifts. Footage of the blades in question shows them to be made out of a completely non-reflective black material appearing as a "black void in space." As the blades rapidly vanish after leaving the subject's possession, no structural analysis is possible at this time.</li>
                                </ul>
                            </p>
                            <p>SCP-076-2 has effectively been killed several times in various manners:
                                <ul>
                                    <li>Sustained fire from multiple heavy-caliber machine guns.</li>
                                    <li>Asphyxiation.</li>
                                    <li>Crushed beneath a 13.6 metric tonne piece of elevator equipment for use on SCP-076-1.</li>
                                    <li>Cremation through the use of a Thermate-TH3 grenade placed directly inside SCP-076-2's open chest cavity.</li>
                                    <li>During the worst breach to date, Containment Area-25 (which previously housed SCP-076) was forced to detonate its on site warhead as a last attempt to contain SCP-076-2 while it was attempting escape, resulting in total destruction of the site and all on-site personnel. SCP-076-1 survived.</li>
                                </ul>
                            </p>
                            <p>Upon death, SCP-076-2's remains will putrefy rapidly, until reduced to dust. SCP-076-1 and the coffin within will then slam shut with great force, and the lock will rotate, sealing it shut. SCP-076-2 will then reform within the coffin, a process taking anywhere from six (6) hours to twenty-five (25) years.</p>
                            <p>What posthumous analysis of SCP-076-2 exists shows that it has a internal system highly different from our own, documented in [DATA EXPUNGED].</p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A towering figure clad in ancient, bloodstained armor, with skin covered in ritual scars and eyes that blaze with a cold, unfeeling rage. Able awakens periodically from his indestructible sarcophagus, seeking out warriors and enemies to test his skill and satisfy his endless thirst for combat. Able speaks little but fights with a brutal efficiency that few can match, leaving a trail of devastation in his wake.`,
                        "HP": 20,
                        "Morale": "12 (unyielding; never retreats)",
                        "Armor": "3 (ancient armor and unnatural resilience)",
                        "Speed": "Fast (moves quickly and precisely)",
                        "Attack": `Blades of Rage – 1d10 damage on a successful hit, plus chance to strike twice`,
                        "SpecialAbilities": `
                                <p><b>Blades of Rage:</b> Able wields two ancient, curved swords with deadly proficiency, striking with brutal speed and precision.
                                    <ul>
                                        <li><b>Effect:</b> Able makes one attack per round, dealing 1d10 damage on a successful hit (Agility DR12 to avoid). If Able lands a successful hit, he has a 50% chance (roll 1d6, success on 4+) to make an additional attack on the same target or a nearby enemy.</li>
                                    </ul>
                                </p>
                                <p><b>Unstoppable Assault:</b> Driven by an insatiable need for violence, Able moves through the battlefield with lethal determination, attacking all in his path.
                                    <ul>
                                        <li><b>Effect:</b> When engaged in combat with three or more enemies, Able gains +2 to all attacks due to his combat mastery. He also has an advantage on all Agility rolls to dodge attacks while in his bloodthirsty frenzy.</li>
                                    </ul>
                                </p>
                                <p><b>Resurrection:</b> If Able is defeated, he can resurrect within 1d6 minutes inside his indestructible sarcophagus, fully restored. Able’s sarcophagus must be restrained or sealed, otherwise, he will continue to re-emerge.
                                    <ul>
                                        <li><b>Effect:</b> Once killed, Able will return to his sarcophagus (if it is nearby), regenerate, and emerge ready for battle. If the sarcophagus is somehow sealed (requiring powerful magic or supernatural force), he may remain dormant indefinitely. Otherwise, he is driven to seek combat upon revival.</li>
                                    </ul>
                                </p>
                                <p><b>Battle Lust:</b> Able’s rage intensifies the longer he fights, causing him to grow stronger with each kill he makes in a single combat.
                                    <ul>
                                        <li><b>Effect:</b> For each enemy Able kills, he gains +1 to damage and attack rolls, lasting for the remainder of the combat. If no enemies remain, he becomes increasingly agitated and may lash out at any living creature nearby.</li>
                                    </ul>
                                </p>
                                `,
                        "Weakness": `<p>Extreme caution is used in containment. SCP-076 can be temporarily subdued with heavy artillery or explosives but is difficult to neutralize permanently due to rapid regeneration.</p>`,
                    }
                }
            }
        },
        {//SCP 096
            "id": "SCP096",
            "name": "SCP 096 - Shy Guy",
            "safety_class": "Euclid",
            "image": "images/SCP-096_img.png", // Static image for this SCP
            "info": {
                "": {
                    "containment": "SCP-096 is to be contained in its cell, a 5 m x 5 m x 5 m airtight steel cube, at all times. Weekly checks for any cracks or holes are mandatory. There are to be absolutely no video surveillance or optical tools of any kind inside SCP-096's cell. Security personnel will use pre-installed pressure sensors and laser detectors to ensure SCP-096's presence inside the cell. <br>Any and all photos, video, or recordings of SCP-096's likeness are strictly forbidden without approval from Dr. ███ and O5-█.",
                    "description": "SCP-096 is a humanoid creature measuring approximately 2.38 meters in height. Subject shows very little muscle mass, with preliminary analysis of body mass suggesting mild malnutrition. Arms are grossly out of proportion with the rest of the subject's body, with an approximate length of 1.5 meters each. Skin is mostly devoid of pigmentation, with no sign of any body hair.",
                    "additional": `<p>SCP-096's jaw can open to four (4) times the norm of an average human. Other facial features remain similar to an average human, with the exception of the eyes, which are also devoid of pigmentation. It is not yet known whether SCP-096 is blind or not. It shows no signs of any higher brain functions, and is not considered to be sapient.</p>
                            <p>SCP-096 is normally extremely docile, with pressure sensors inside its cell indicating it spends most of the day pacing by the eastern wall. However, when someone views SCP-096's face, whether it be directly, via video recording, or even a photograph, it will enter a stage of considerable emotional distress. SCP-096 will cover its face with its hands and begin screaming, crying, and babbling incoherently. Approximately one (1) to two (2) minutes after the first viewing, SCP-096 will begin running to the person who viewed its face (who will from this point on be referred to as SCP-096-1).</p>
                            <p>Documented speeds have varied from thirty-five (35) km/h to ███ km/h, and seems to depend on distance from SCP-096-1. At this point, no known material or method can impede SCP-096's progress. The actual position of SCP-096-1 does not seem to affect SCP-096's response; it seems to have an innate sense of SCP-096-1's location. Note: This reaction does not occur when viewing artistic depictions (see Document 096-1).</p>
                            <p>Upon arriving at SCP-096-1's location, SCP-096 will proceed to kill and [DATA EXPUNGED] SCP-096-1. 100% of cases have left no traces of SCP-096-1. SCP-096 will then sit down for several minutes before regaining its composure and becoming docile once again. It will then attempt to make its way back to its natural habitat, [DATA REDACTED]</p>
                            <p>Due to the possibility of a mass chain reaction, including breach of Foundation secrecy and large civilian loss of life, retrieval of subject should be considered Alpha priority.</p>
                        `
                },
                "5th Edition": {
                    "stats": {
                        "HP": 150,
                        "AC": 10,
                        "Speed": "300 ft",
                        "Strength": 30,
                        "Dexterity": 30,
                        "Constitution": 30,
                        "Intelligence": 1,
                        "Wisdom": 1,
                        "Charisma": 1,
                        "Passive":`<ul>
                                    <li><b>Condition Immunity:</b>Blinded, Charmed, Deafened, Frightened, Petrified, Exhaustion, Invisible</li>
                                    <li><b>Senses:</b>Passive perception 5</li>
                                    <li><b>Languages:</b>Does not seem to be sentient.</li>
                                    <li><b>Auto Healing:</b>Regens 2d10 HP pr round</li>
                                    <li><b>Stunned:</b>If it's dealt above 30 damage in a round its stunned for 1 round (it still heals)</li> 
                                    <li><b>Immortal:</b>if redused to 0hp it is stunned for 24hours (It cannot die)</li>
                                    <li><b>DONT LOOK AT ME!:</b>Not hostile unless someone looks at its face</li>
                                    <li><b>Nemesis:</b>096 alweays knows where the person who saw theire face is, and will ignore anything else until theire eliminated.</li>
                                </ul>`,
                        "Actions":`<ul>
                                    <li><b>Slam:</b><i>Melee Weapon Attack:</i>+4 to hit, reach 10ft.<br><i>Hit:</i>4d4 +2 bludgeoning damage. 
                                        <br>If the creature is large or smaller it must suceed on a Strength saving throw (DC12) or be grappled.</li>
                                    <li><b>Rip apart:</b><i>Grappled attack:</i>If 096 has grappled someone, he will try to tear them apart.
                                        <br><i>Below 16:</i>deals 4d4+ 4 force damage.
                                        <br><i>On a 16 or higher:</i> deals 4d12 +10 force damage.
                                        <br><i>On nat 20:</i>096 rips them apart, instantly killing them.</li>
                                </ul>`

                    }
                },
                "Fallout": {
                    "stats": {
                        "HP": 150,
                        "Stamina": 150,
                        "ArmorClass": 10,
                        "ActionPoints": 30,
                        "Strength": 15,
                        "Perception": 0,
                        "Endurance": 15,
                        "Charisma": 0,
                        "Intelligence": 0,
                        "Agility": 15,
                        "Luck": 0,
                        "Passive":`<ul>
                                    <li><b>Condition Immunity:</b>Blinded, Buzzed, Dazed, Deafened, Dehydration, Drunk, Encumbered, Exshaustion, Fatigue, Frightened, Hammered, Heavy Encumbered, Hunger, Invisible, Radiation, Shadowed, Shock, Unconscious, Wasted</li>
                                    <li><b>Senses:</b>Passive sence 5</li>
                                    <li><b>Languages:</b>Does not seem to be sentient.</li>
                                    <li><b>Auto Healing:</b>Regens 1d10 HP pr round and 3d10 stamina points</li>
                                    <li><b>Stunned:</b>If it's dealt above 30 damage in a round its stunned for 1 round (it still heals)</li> 
                                    <li><b>Immortal:</b>if redused to 0hp it is stunned for 24hours (It cannot die)</li>
                                    <li><b>DONT LOOK AT ME!:</b>Not hostile unless someone looks at its face</li>
                                    <li><b>Nemesis:</b>096 alweays knows where the person who saw theire face is, and will ignore anything else until theire eliminated.</li>
                                </ul>`,
                        "Actions":`<ul>
                                    <li><b>Slam:</b><i>Melee Weapon Attack:</i>+4 to hit, reach 10ft.<br><i>Hit:</i>4d4 +2 bludgeoning damage. 
                                        <br>If the creature is large or smaller it must suceed on a Strength saving throw (DC12) or be grappled.</li>
                                    <li><b>Rip apart:</b><i>Grappled attack:</i>If 096 has grappled someone, he will try to tear them apart.
                                        <br><i>Below 16:</i>deals 4d4+ 4 force damage.
                                        <br><i>On a 16 or higher:</i> deals 4d12 +10 force damage.
                                        <br><i>On nat 20:</i>096 rips them apart, instantly killing them.</li>
                                </ul>`

                    }
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A wretched, emaciated figure, pallid and trembling, its face hidden. It only wanders aimlessly, moaning softly—until someone sees its face. Then, all will know death.`,
                        "HP": 20,
                        "Morale": "--",
                        "Armor": "Near-Invulnerability (see below)",
                        "Speed": "Normal (when calm), Fast (Fast when enraged)",
                        "Attack": "Rending Claws 1d10 + special",
                        "SpecialAbilities": `
                                <p><b>Near-Invulnerability:</b> 
                                <ul>
                                    <li>SCP-096 ignores any damage from conventional weapons, including slashing, piercing, or blunt attacks. Only extremely powerful, supernatural, or reality-altering forces have any effect. All attacks not meeting these criteria deal only 1 damage, regardless of their original roll.</li>
                                    <li>Magic, ancient relics, or similarly rare sources of damage might hurt it normally, but such methods should be scarce, if even possible.</li>
                                </ul>
                                    </p>
                                <p><b>Enraged Pursuit:</b> When any creature sees The Shy One’s face, it becomes instantly enraged and will pursue the viewer relentlessly until they are dead, ignoring all others. It cannot be distracted or deterred from this pursuit.</p>
                                <p><b>Terrifying Gaze:</b> Anyone who glimpses The Shy One’s face must succeed on a Toughness DR16 check or be paralyzed with fear for 1d4 rounds, fully aware of the horror about to unfold.</p>
                                <p><b>Rending Claws:</b> 
                                <ul>
                                    <li>Damage: 1d10 + special</li> 
                                    <li>Special: On a successful hit, the target must succeed on a Toughness DR14 or be instantly killed by SCP-096’s ferocious assault.</li>
                                </ul></p>
                                <p><b>Unstoppable:</b> SCP-096 cannot be stopped by walls, traps, or terrain while enraged. It moves unerringly toward its target, ignoring any obstacles. Once it reaches the viewer, it attacks without mercy. If its target dies, SCP-096 reverts to its calm state and wanders aimlessly.</p>
                                <p><b>Regeneration:</b> If SCP-096 takes any damage, it heals at a rate of 1d6 HP per round, making it nearly impossible to kill even with supernatural means unless damage is dealt continuously.</p>
                            `,
                        "Weakness": `<p>Avoiding eye contact with its face. SCP-096 will become docile once it has eliminated those who viewed it. Physical containment without eye exposure is essential.</p>`,
                    }
                }
            }
        },
        {//SCP 106
            "id": "SCP106",//"SCP000"
            "name": "SCP 106 - The Old Man",
            "safety_class": "Keter",
            "image": "images/SCP-106_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `No physical interaction with SCP-106 is allowed at any time. All physical interaction must be approved by no less than a two-thirds vote from O5-Command. Any such interaction must be undertaken in AR-II maximum security sites, after a general non-essential staff evacuation. All staff (Research, Security, Class D, etc.) are to remain at least sixty meters away from the containment cell at all times, except in the event of breach events.
                            <p>SCP-106 is to be contained in a sealed container, comprised of lead-lined steel. The container will be sealed within forty layers of identical material, each layer separated by no less than 36cm of empty space. Support struts between layers are to be randomly spaced. Container is to remain suspended no less than 60cm from any surface by ELO-IID electromagnetic supports.</p>
                            <p>Secondary containment area is to be comprised of sixteen spherical “cells”, each filled with various fluids and a random assembly of surfaces and supports. Secondary containment is to be fitted with light systems, capable of flooding the entire assembly with no less than 80,000 lumens of light instantly with no direct human involvement. Both containment areas are to remain under 24 hour surveillance.</p>
                            <p>Any corrosion observed on any containment cell surfaces, staff members, or other site locations within two hundred meters of SCP-106 are to be reported to Site Security immediately. Any objects or personnel lost to SCP-106 are to be deemed missing/KIA. No recovery attempts are to be made under any circumstances.</p>
                            `,
                    "description": `SCP-106 appears to be an elderly humanoid, with a general appearance of advanced decomposition. This appearance may vary, but the “rotting” quality is observed in all forms. SCP-106 is not exceptionally agile, and will remain motionless for days at a time, waiting for prey. SCP-106 is also capable of scaling any vertical surface and can remain suspended upside down indefinitely. When attacking, SCP-106 will attempt to incapacitate prey by damaging major organs, muscle groups, or tendons, then pull disabled prey into its pocket dimension. SCP-106 appears to prefer human prey items in the 10-25 years of age bracket.`,
                    "additional": `<p>SCP-106 causes a “corrosion” effect in all solid matter it touches, engaging a physical breakdown in materials several seconds after contact. This is observed as rusting, rotting, and cracking of materials, and the creation of a black, mucus-like substance similar to the material coating SCP-106. This effect is particularly detrimental to living tissues, and is assumed to be a “pre-digestion” action. Corrosion continues for six hours after contact, after which the effect appears to “burn out”.</p>
                            <p>SCP-106 is capable of passing through solid matter, leaving behind a large patch of its corrosive mucus. SCP-106 is able to “vanish” inside solid matter, entering what is assumed to be a form of “pocket dimension”. SCP-106 is then able to exit this dimension from any point connected to the initial entry point (examples: “entering” the inner wall of a room, and “exiting” the outer wall. Entering a wall, and exiting from the ceiling). It is unknown if this is the point of origin for SCP-106, or a simple “lair” created by SCP-106.</p>
                            <p>Limited observation of this “pocket dimension” has shown it to be comprised mostly of halls and rooms, with [DATA EXPUNGED] entry. This activity can continue for days, with some subjected individuals being released for the express purpose of hunting, recapture, [DATA EXPUNGED].</p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A decaying, skeletal figure dripping with a viscous, black sludge, SCP-106 moves slowly and deliberately, stalking its victims with a sadistic intent. It can pass through walls and drag people into its own nightmarish pocket dimension, where only agony awaits.`,
                        "HP": `22 (4d6+8)`,
                        "Morale": `13 ("Relentless and sadistic; it will never retreat, toying with its victims until death")`,
                        "Armor": "	4 (Putrid, resilient flesh resistant to physical damage)",
                        "Speed": "Slow (it shambles forward with terrifying purpose)",
                        "Attack": `Decay Touch: D6 damage + special`,
                        "SpecialAbilities": `
                                <p><b>Decay Touch (Attack):</b>
                                    <ul>
                                        <li><b>Damage:</b> 1d6</li>
                                        <li><b>Special:</b> On a successful hit, the target must succeed on a Toughness DR 14 check or suffer an additional 1 HP of necrotic rot each round. This rot continues until the target passes a Toughness DR 12 check, representing the decay spreading through their flesh.</li>
                                    </ul>
                                </p>
                                <p><b>Corrosion Aura:</b> Within a 5-foot radius, SCP-106 emits a powerful aura of decay, corroding all non-magical objects. Weapons used to strike SCP-106 suffer a -1 penalty to damage after each hit, and armor loses 1 point of protection each round it remains within this aura.</p>
                                <p><b>Pocket Dimension:</b> Once per encounter, SCP-106 can attempt to drag a victim into its own personal dimension of rot and despair. The target must make an Agility DR 16 check to avoid being pulled in. If they fail, they are transported to a twisted, decaying landscape for 1d4 rounds, taking D4 damage per turn they remain there. Upon returning, they are weakened, taking a -2 to all rolls for the rest of the encounter.</p>
                                <p><b>Eldritch Evasion:</b> SCP-106 can phase through walls, floors, and barriers, allowing it to pursue targets even through obstacles. Once per round, it may phase through any non-magical barrier within its movement range.</p>
                                <p><b>Inescapable:</b>If SCP-106 has chosen a target, it will pursue that target relentlessly, ignoring any distractions or other targets until the chosen victim is dead. It cannot be bargained with or persuaded to stop, and only direct intervention or light can halt its pursuit.</p>
                                `,
                        "Weakness": `<p>Bright light repels SCP-106. Any source of intense light (such as a Silver Crucifix, Sacred Incense, or fire) forces it to retreat and imposes -1 on all its rolls while within the light. Prolonged exposure deals D4 damage per round as the light disrupts its decaying form.</p>`,
                    }
                }
            }
        },
        {//SCP 113
            "id": "SCP113",
            "name": "SCP 113 - Gender-Switcher",
            "safety_class": "Safe",
            "image": "images/SCP-113_img.jpg", // Static image for this SCP
            "info": {
                "": {
                    "containment": `SCP-113 is to be kept in standard storage in Site-23. SCP-113 may be handled with laboratory gloves. No organism may be exposed to SCP-113 without prior approval. Personnel exposed to SCP-113 are to be kept under medical observation for 7 days.`,
                    "description": `SCP-113 resembles a small, polished piece of red jasper. Analysis shows that SCP-113 is not composed of jasper, but [REDACTED] composition similar to that of other recovered objects.`,
                    "additional": `<p>When SCP-113 comes in direct contact with the flesh of an organism possessing sex chromosomes, the organism's physical characteristics associated with gender and biological sex are transformed (including genetics and secondary sexual characteristics), either reversed or altered.</p>
                                   <p>This process occurs in four stages:</p>
                                   <p><b>Stage 1:</b> Lasts approximately 0.2 seconds. SCP-113 bonds with the cells that it touches and induces an unidentified chemical change. This process causes tissue damage similar to mild burns, and SCP-113 cannot be removed from contact with the subject until all stages complete.</p>
                                   <p><b>Stage 2:</b> Lasts approximately 20 seconds. SCP-113 emits a low-intensity electromagnetic wave which travels through the subject's body. Subjects may experience nausea and vomiting, along with a stinging sensation throughout the body.</p>
                                   <p><b>Stage 3:</b> Lasts approximately 60 seconds. Throughout this stage, the subject's cellular makeup is temporarily transformed. Altered cell composition ranges widely from being unidentifiable as human, to a unique variation of partially-differentiated stem cells. The subject will experience intense stimulation of all sensory nerves during the final 20 seconds of this stage, and describe this part of the process as extremely painful. Subjects in poor health may die of shock in this stage.</p>
                                   <p>At the end of this stage, the subject's biological sex is permanently altered. In standard cases, the subject's biological sex will be changed to the opposite biological sex. All primary and secondary sexual characteristics are altered accordingly.</p>
                                   <p><b>Stage 4:</b> SCP-113 disengages from the subject and becomes inert.</p>
                                   <p>Subjects with sex chromosomes atypical for their species (such as intersex humans) are affected in unpredictable ways by SCP-113. In human intersex subjects, this appears to be influenced by gender identity; such subjects may be unaffected, or their bodies may change to match baseline male or female bodies (with sex chromosomes to match), or other results may occur. Usually, change seems to match or partially match subject's gender identity during initial use, if gender identity is nonstandard. Whether SCP-113 alters its effect based on the presence of a nonstandard gender identity is under investigation.</p>
                                   <p>Gender identity of human subjects is not typically altered by SCP-113. In subjects with nonstandard gender identities (typically gender identities which do not match their pre-exposure biological sex), this usually results in positive psychological effects. In subjects with standard gender identities (male/female, matching pre-exposure biological sex), psychological effects are usually negative. These appear to be natural psychological reactions, and not an anomalous effect of SCP-113.</p>
                                   <p>SCP-113 exposure results in unusual effects in certain species. In Varanus komodoensis (the komodo dragon), a number of ZW/ZZ individuals were transformed to possess WW chromosomes instead of ZZ or ZW, which was in every instance fatal. In Caenorhabditis elegans (a nematode), no males were produced despite C. elegans having two sexes (hermaphrodite and male). Male subjects became hermaphrodites, and hermaphrodite subjects were unaffected. (Note: In wild populations, male C. elegans are extremely rare.)</p>
                                   <p>Subjects of single-sex, hermaphroditic species (such as earthworms) will not be transformed by SCP-113; the object's process will stop at the second stage and the object will become inert.</p>
                                   <p>Previously exposed subjects may undergo SCP-113's effects again by re-initiating contact with SCP-113 after approximately 60 seconds have passed. However, in 25% of cases, immediate second exposure to SCP-113 fails to transform the subject correctly. Transformation failure varies in nature, but usually includes massive bone, organ, and tissue damage to the subject, as well as partial or complete obliteration of genitalia. This commonly results in death by organ trauma or internal bleeding.</p>
                                   <p>Failure rate can be affected by subjects not coming into contact with SCP-113 for a lengthy period of time, which varies by subject; patterns are under research. Under normal circumstances, transformation failure rate increases exponentially upon multiple exposures. Subjects who survive rapid, repeated exposure are eventually transformed [DATA EXPUNGED] Further anomalous elements continue to appear as exposure count increases.</p>
                    `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A smooth, blood-red stone, warm to the touch and faintly pulsing with an inner light. Known only as The Shifting Stone, this relic has the power to transform those who touch it, altering their physical form in ways that defy reason. The stone’s origins are lost to time, but ancient writings warn that it “shapes flesh to mockery of itself.”`,
                        "Usage": `Activated by direct touch
                            <p><b>Effect:</b>Alters physical form in unpredictable ways</p>`,
                        "SpecialAbilities": `
                                <p><b>Transformative Touch:</b> When a creature touches the Shifting Stone, their body undergoes a rapid and sometimes drastic transformation. Roll on the following table to determine the effect:
                                    <ul>
                                        <li><b>1-3 - Gender Shift:</b> The creature’s primary and secondary sexual characteristics are transformed to the opposite or a different form.</li>
                                        <li><b>4 - Partial Mutation:</b> The creature gains a feature associated with the opposite gender or a strange mutation (e.g., elongated limbs, a secondary face).</li>
                                        <li><b>5 - Full Mutation:</b> The creature undergoes a complete change, gaining an unusual androgynous appearance or blending of characteristics.</li>
                                        <li><b>6 - Rejection Reaction:</b> The creature’s body resists the transformation, causing intense pain and 1d6 damage.</li>
                                    </ul>
                                </p>
                                <p><b>Mental and Emotional Influence:</b> The stone doesn’t just change the physical form; it also alters the mental and emotional state. Each time a character uses or is affected by the stone, they must roll Presence DR12:
                                    <ul>
                                        <li><b>Success:</b> The transformation is accepted, and the character feels surprisingly comfortable in their new form.</li>
                                        <li><b>Failure:</b> The character experiences intense disorientation and loss of identity, suffering -1 to all Presence rolls until they can reconcile with their altered form.</li>
                                    </ul>
                                </p>
                                <p><b>Irreversible Changes:</b> Transformations caused by the Shifting Stone are considered permanent. While another touch from the stone may cause further changes, they will never fully revert to their original form. Each new transformation adds layers to the character’s sense of self, causing them to slowly lose memories and traits associated with their original identity.</p>
                                <p><b>Compulsive Use:</b> The stone has an unsettling draw to it. Each time a character touches the Shifting Stone and experiences a transformation, they must roll Toughness DR10. On a failure, they develop a compulsion to touch the stone again whenever it is nearby, as if seeking further transformation.</p>
                                <p><b>Arcane Resonance:</b> The Shifting Stone emanates a faint aura that sensitive individuals or magical creatures can sense. It attracts attention from beings that feed off transformation or mutation, such as shapeshifters, cursed sorcerers, or spirits of fluid identity. Encounters with such creatures may increase if the stone is carried for extended periods.</p>
                                `
                    }
                }
            }
        },
        {//SCP 117
            "id": "SCP117",
            "name": "SCP 117 - The Complete Repair Tool",
            "safety_class": "Safe",
            "image": "images/SCP-117_img.png", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-117 is to be kept in the small leather pouch it was found in, unless in use or in current study.
                            <p>Any personnel deemed mentally fit may enter the containment cell of the SCP, though if they are suspected to be trying to remove the SCP without permission, they are to be searched, and if that is the case, they are to be reprimanded.</p>
                            <p>The door to the containment cell should remain locked, and a guard posted only when the object is in use.</p>
                            `,
                    "description": `The item appears to be a regular multitool, of unknown make and brand, found in ███████████, Florida. At first glance, only the normal tools are found (screwdriver, knife, can opener, etc.), but if the user is faced with a task, regardless of what tool the subject intends to pull out and use, a tool perfectly fitted for the job will take its place, regardless of spatial quantities that are being broken by the tool. All other tools always seem to be present, though, after the task is completed and the tool closed, unless faced with a task requiring that tool again, the tool cannot be found on the tool again.`,
                    "additional": ``
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A strange, metallic tool that seems to change shape depending on the user's intent. It appears as a patchwork of various mechanical and organic parts, shifting fluidly in the hand. Known as The Relic of Restoration, it can repair almost anything broken, from weapons to armor to even flesh and bone, but each repair has a hidden cost.`,
                        "Usage": `Can repair damaged or broken items and heal physical wounds
                            <p><b>Limitations:</b> Each repair introduces a flaw, imperfection, or curse to the repaired item or character</p>
                            `,
                        "SpecialAbilities": `
                                <p><b>Instant Repair:</b> When used, the Relic of Restoration can repair any broken or damaged object, including weapons, armor, and even wounds. The repair is quick and almost magical, restoring the item or person to near-perfect condition. However, each repair is accompanied by an unintended effect, as if the tool “fixes” the item or injury but leaves behind a small curse.</p>
                                <p><b>Repair Roll Table:</b> Roll a d6 to determine the quality of each repair:
                                    <ul>
                                        <li><b>1-2 Flawed Repair:</b> The item or wound is partially repaired but still imperfect, reducing its functionality.</li>
                                        <li><b>3-4 Standard Repair:</b> The repair is effective, but the item or person gains a small imperfection or cosmetic change.</li>
                                        <li><b>5 Enhanced Repair:</b> The item or wound is fully restored, even gaining a minor enhancement, but carries a subtle curse.</li>
                                        <li><b>6 Twisted Repair:</b> The repair works but distorts the item or wound in a strange, unnatural way, making it unsettling to use.</li>
                                    </ul>
                                </p>
                                <p><b>Cursed Consequences:</b> Each time the Relic of Restoration is used, the repaired item or wound gains a small curse or flaw. Roll a d6 to determine the nature of the curse:
                                    <ul>
                                        <li><b>1 Echo of Pain:</b> The repaired character feels a ghostly pain in the area, suffering -1 Toughness until the curse is lifted.</li>
                                        <li><b>2 Fragile Bound:</b> The repaired item is weakened, reducing its durability by half and requiring future repairs more frequently.</li>
                                        <li><b>3 Bleeding Edge:</b> Weapons repaired by the tool deal +1 damage but hurt the wielder, causing 1 HP recoil damage with each use.</li>
                                        <li><b>4 Bonebound:</b> Armor or flesh repairs create a “bone” appearance or feel, making the wearer’s skin or armor unnaturally hard, eerie, and rigid.</li>
                                        <li><b>5 Haunted Repair:</b> The item or healed wound begins to whisper or emit strange sounds, creating a sense of unease in those nearby.</li>
                                        <li><b>6 Altered Form:</b> The repaired item or wound takes on a strange, mutated form, unsettling to look at and strange to use, with an unpredictable effect.</li>
                                    </ul>
                                </p>
                                <p><b>Life-Bound Restoration:</b> The tool also repairs living flesh, but this comes with particular risks. When used to heal injuries, roll Toughness DR14. On a failure, the character’s repaired wound feels “wrong” and is marked by an unnatural color, texture, or scar. Each failed healing attempt imposes a cumulative -1 penalty to Presence as the character’s unsettling appearance increases.</p>
                                <p><b>Compulsion of Repair:</b> The Relic of Restoration has an aura that compels its owner to use it whenever they encounter broken things, whether or not they truly need repair. Each day, the character holding the relic must roll Presence DR12. On a failure, they feel an overwhelming need to “fix” something broken, even at great risk.</p>
                                <p><b>Arcane Energy Leak:</b> Each time the Relic is used, roll a d20. On a natural 1, the tool briefly “leaks” arcane energy, affecting nearby items and potentially damaging them or causing bizarre transformations. Affected items might fuse, lose function, or take on ghostly or organic qualities, as though the tool momentarily lost control over its power.</p>
                                `
                    }
                }
            }
        },
        {//SCP 131
            "id": "SCP131",
            "name": "SCP 131 - The Eye pods",
            "safety_class": "Safe",
            "image": "images/SCP-131_img.png", // Static image for this SCP
            "info": {
                "": {
                    "containment": "No special safety procedures are to be taken with SCP-131-A and SCP-131-B. They are free to travel about Site-19 so long as they do not attempt to enter any restricted areas or attempt to leave the facility. Casual contact with the subjects is permitted, but it is recommended that such contact be kept to a minimum to prevent the creatures from forming an attachment to personnel. Hourly tabs are to be kept on subjects at all times; failure to account for their presence at these times constitutes a level one lockdown situation. Any report of abuse or mistreatment of the subjects will result in a harsh reprimand.",
                    "description": "SCP-131-A and SCP-131-B (affectionately nicknamed the Eye Pods by personnel) are a pair of teardrop-shaped creatures roughly 30 cm (1 ft) in height, with a single blue eye in the middle of their bodies. SCP-131-A is burnt orange in color while SCP-131-B is mustard yellow. At the base of each creature is a wheel-like protrusion which allows for locomotion, suggesting that the creatures may be biomechanical in origin. The subjects can move surprisingly fast, covering over 60 m (200 ft) in a matter of seconds. The subjects, however, lack a braking system, which has led to some rather spectacular, if not overly amusing, mishaps involving the creatures. The subjects have also shown the ability to climb sheer surfaces, and have gotten lost in the air vents on more than one occasion.",
                    "additional": `<p>The subjects seem to have the intelligence of common house cats and are insatiably curious. Most of the time they simply roll around the facility, observing personnel at work and catching peeks at other Safe class SCPs. The subjects seem to be able to communicate with each other via an untranslatable high-pitched babbling. The subjects have never been observed to blink, even in laboratories when the subjects have been videotaped for over 18 consecutive hours.</p>
                        <p>The subjects seem to respond well to any affection given to them and will quickly bond to the giver of said affection, much in the same way a puppy bonds with a human being. They will follow anyone or anything they've made a bond with anywhere, even into normally restricted areas. Although curious, the subjects can sense danger in their general vicinity, and if the object of their bond begins to approach something they register as dangerous (e.g., Euclid or Keter class objects) they will swarm around their bonded companion's feet (or appropriate extremities) while babbling in a panicked tone, as if to warn them. Because of the daily dangers faced by Site-19 staff in dealing with Euclid and Keter class objects, it is recommended that staff avoid making attempts to bond with the subjects, as it can pose a distraction during delicate operations and experiments and may pose a danger to the subjects themselves (see Addendum 131-1). If the subjects are ignored by their bonded target long enough, they will eventually lose interest and return to their normal activities.</p>
                        <p>It should be noted that the subjects require no real care or maintenance from the site staff. They do not eat, leave droppings, or even sleep. It would seem that the only sustenance they require is visual stimulation (although this requires further study to verify).</p>
                        <p>Subjects SCP-131-A and SCP-131-B were found in a cornfield outside ████████████ in the year 19██. They were promptly transported to Site-19 via [DATA EXPUNGED] and were then downgraded to Safe class and given free rein across the site once it became clear they were not broadcasting what they saw to any hostile foreign powers.</p>
                        <p><b>Addendum 131-1:</b>During an incident that took place on ██/██/████, the subjects followed one of the cleaning staff on routine cleaning of the container of SCP-173. After their normal attempts to warn the cleaner of the danger were ignored, the creatures rushed into the container in front of him and the other two personnel on duty. Once inside, the staff members observed the subjects sitting in front of SCP-173 and watching it intently, as if aware that it could only move if unobserved. The cleaners ignored the presence of the subjects and continued with the bi-weekly cleaning as per standard procedures. When the cleaning crew left, the subjects did as well, rolling backward slowly and never taking their eyes off of SCP-173. Current applications of SCP-131-A and SCP-131-B as "wardens" for SCP-173 (and perhaps other SCP which require constant observation, such as SCP-689) are being considered.</p>
                        `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `Small, teardrop-shaped creatures with a single, oversized eye that dominates their bodies. SCP-131-A and SCP-131-B, often referred to as “the Eye Pods,” are endlessly curious and have a strong affinity for human companions. They watching everything with an innocent, unwavering gaze, and their presence seems to alert their allies to hidden dangers.`,
                        "HP": 3,
                        "Morale": "12 (the Eye Pods are fearless when protecting or following their allies)",
                        "Armor": "0 (they are small and fragile)",
                        "Speed": "Fast (they dart around quickly)",
                        "SpecialAbilities": `
                                <p><b>Sentinel Eyes:</b> SCP-131-A and SCP-131-B are incredibly alert and sensitive to nearby threats. They act as watchful sentinels, granting allies a +2 to Presence rolls for detecting hidden or stealthy creatures, traps, or any kind of lurking danger within 30 feet. The Eye Pods will stare intently at any threat they detect, pointing it out to their allies with little squeaks or gestures.</p>
                                <p><b>Unwavering Loyalty:</b> The Eye Pods form strong attachments to those they follow. If they see a companion in distress, they will attempt to help by drawing attention or positioning themselves near any hidden dangers. They can’t directly engage in combat but will do everything they can to warn and assist. If a companion falls unconscious or is grievously wounded, the Eye Pods remain by their side and may even try to guide them to safety, if possible.</p>
                                <p><b>Danger Alert:</b> Whenever a hidden danger is within sight, SCP-131 will emit a series of urgent, high-pitched sounds, alerting their allies. This grants allies a chance to reroll failed Presence checks to notice hidden traps, ambushes, or approaching enemies, as long as the Eye Pods can see the threat.</p>
                                <p><b>Innocent Influence: </b> The presence of SCP-131-A and SCP-131-B has a subtly calming effect on those nearby. Any creature within 10 feet of the Eye Pods feels a faint sense of security and companionship, reducing feelings of despair or fear. Once per day, they can grant one ally a +1 bonus to a Morale check as long as they are visibly present.</p>
                                <p><b>Blind Loyalty (One-Time Use):</b> If SCP-131’s chosen companion is in extreme danger, one of the Eye Pods may throw itself in harm's way to save them. For one instance, it can intercept an attack directed at a companion, taking the damage in their stead. This will leave the Eye Pod badly injured and unable to continue moving for the rest of the day, but it will recover if tended to.</p>
                                `
                    }
                }
            }
        },
        {//SCP 173
            "id": "SCP173",
            "name": "SCP 173 - Sculpture",
            "safety_class": "Euclid",
            "image": "images/SCP-173_img.jpeg", // Static image for this SCP
            "info": {
                "": {
                    "containment": "Item SCP-173 is to be kept in a locked container at all times. When personnel must enter SCP-173's container, no fewer than 3 may enter at any time and the door is to be relocked behind them. At all times, two persons must maintain direct eye contact with SCP-173 until all personnel have vacated and relocked the container.",
                    "description": "Moved to Site-19 1993. Origin is as of yet unknown. It is constructed from concrete and rebar with traces of Krylon brand spray paint. SCP-173 is animate and extremely hostile. The object cannot move while within a direct line of sight. Line of sight must not be broken at any time with SCP-173. Personnel assigned to enter container are instructed to alert one another before blinking. Object is reported to attack by snapping the neck at the base of the skull, or by strangulation. In the event of an attack, personnel are to observe Class 4 hazardous object containment procedures.",
                    "additional": `<p>Personnel report sounds of scraping stone originating from within the container when no one is present inside. This is considered normal, and any change in this behaviour should be reported to the acting HMCL supervisor on duty.</p>
                                    <p>The reddish brown substance on the floor is a combination of feces and blood. Origin of these materials is unknown. The enclosure must be cleaned on a bi-weekly basis.</p>
                        `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A hideous, humanoid statue with a twisted, unsettling form. It’s silent, unmoving—until no one is watching. Then it strikes with lethal speed.`,
                        "HP": 16,
                        "Morale": "--",
                        "Armor": "3 (Unyielding stone)",
                        "Speed": "Near-instantaneous when unseen; Immobile when in view",
                        "Attack": "Neck Snap 1d12 + special",
                        "SpecialAbilities": `
                                <p><b>Unseen Movement:</b> SCP-173 only moves when no one is directly looking at it. If at least one character has direct visual contact, SCP-173 is completely immobile. However, as soon as everyone’s line of sight is broken, even momentarily, it moves at blinding speed toward the nearest character, positioning itself within melee range.</p>
                                <p><b>Neck Snap:</b> 
                                    <ul>
                                        <li>Damage: 1d12 + special</li> 
                                        <li>Special: On a successful attack, SCP-173 snaps the target’s neck. If the target fails a Toughness DR16, they are instantly killed. Otherwise, they take 1d12 damage and suffer a critical injury (broken bone, nerve damage, etc.) at the GM’s discretion.</li>
                                    </ul></p>
                                <p><b>Indestructible Form:</b> SCP-173 is effectively indestructible by conventional means. Any attacks, spells, or effects deal only 1 point of damage if they hit, regardless of damage rolls. Even at 0 HP, SCP-173 does not “die” but instead activates its Relocate ability.</p>
                                <p><b>Relocate (at 0 HP):</b> When SCP-173 is reduced to 0 HP, it vanishes entirely from sight, only to respawn in a new location within 1d6 rounds. Roll a d6:
                                    <ul>
                                        <li>1-3: It respawns in the same room, lurking in a shadowed corner or just out of sight.</li> 
                                        <li>4-6: It respawns in a nearby room or corridor, and the players can hear the faint scrape of stone as it reappears, ready to stalk them anew.</li>
                                    </ul>
                                </p>
                                <p><b>Aura of Unease:</b> Any creature within 10 feet of SCP-173 feels a chilling dread. Each round within this range, they must succeed on a Presence DR12 or become distracted, making it harder to keep SCP-173 in view. On a failure, they suffer -1 to all rolls until they move out of range.</p>
                                `,
                        "Weakness": `<p>Continuous observation prevents movement. Containment procedures involve rotating staff to maintain constant eye contact.</p>`,
                    }
                }
            }
        },
        {//SCP 213
            "id": "SCP213",
            "name": "SCP 213 - Anti-Matter Parasite",
            "safety_class": "Euclid",
            "image": "images/SCP-213_img.jpg", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-213 is contained in a high security humanoid containment cell within Site-77. The chamber is to be surrounded by a 10 meter wide zone filled with gaseous materials corrosive to human skin. SCP-213 should be informed as to the nature of its containment, to prevent manifestation of its effect which would result in additional containment breaches. A staffing of two guards armed with high pressure hoses, oleoresin capsicum, and polymer web grenades should be stationed outside the containment unit at all times.`,
                    "description": `SCP-213 is an adolescent humanoid male, 1.5 m tall, weighing 95 kg. SCP-213 is able to forcefully sever the bonds between atoms in any solid or semi-solid matter with physical contact. An intense flash of light is produced when doing so. SCP-213 can use any part of its body to manifest this effect, and has used it to disintegrate projectiles as they impact its body. Manifestation of this effect has proven to be extremely painful, with extended use causing enough pain to render SCP-213 unconscious.`,
                    "additional": `<p>SCP-213 was recovered from Palo Alto, CA, when reports of a teenage boy being arrested for homicide after "vaporizing" his girlfriend during coitus reached agents embedded in the local police department. Further investigation revealed SCP-213's anomalous properties. However, during initial containment, SCP-213 vaporized the agents attempting to apprehend it. During the ensuing firefight with MTF-████-██, SCP-213 was able to disable 2 agents before being contained. SCP-213's containment procedures were finalized on ██/██/19██, and classified as Euclid.</p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A figure crackling with barely-contained energy, The Lightning Vessel is a person who has become a conduit for an electrical parasite, allowing them to emit deadly electrical bursts. This power is as much a curse as it is a weapon, inflicting excruciating pain and causing their body to deteriorate with every surge. Those who encounter The Lightning Vessel are as likely to be aided as they are to be struck down by this unstable force.`,
                        "HP": 12,
                        "Morale": "7 (conflicted, wary of their own power)",
                        "Armor": "2 (flesh hardened by electrical burns)",
                        "Speed": "Normal",
                        "SpecialAbilities": `
                                <p><b>Arc Discharge:</b> The Lightning Vessel can release a powerful arc of electricity, targeting a single creature within close range. This discharge deals 1d10 damage on a successful Agility DR12 roll to hit. If it hits, nearby creatures must also make an Agility DR10 check or take 1d4 splash damage from the electrical arc. After using this ability, SCP-213 must roll Toughness DR14; on a failure, they suffer 1d6 damage from the physical toll.</p>
                                <p><b>Electric Fury:</b> When in a state of heightened stress (e.g., low HP or backed into a corner), SCP-213 can unleash a burst of electrical energy in a 10-foot radius, dealing 1d6 damage to all creatures nearby. Friends and foes alike must pass an Agility DR14 check to avoid the blast. This burst is involuntary and uncontrollable, often triggered by SCP-213’s desperation or pain.</p>
                                <p><b>Pain Threshold:</b>  Due to their constant state of physical suffering, SCP-213 is highly resistant to pain. They gain +2 to Toughness rolls when resisting effects that would otherwise cause pain or paralysis. However, each time they use their electrical abilities, their body suffers further, leaving them covered in burns, welts, and scars that impose -1 to all Presence rolls as their appearance becomes increasingly unsettling.</p>
                                <p><b>Self-Destructive Power:</b> Each time SCP-213 uses an electrical ability, roll a d6. On a 1, their control slips entirely, causing them to lose 1 HP from internal damage as the parasite strains their body. This damage cannot be healed conventionally and requires a full day of rest to recover 1 HP.</p>
                                <p><b>Unstable Ally:</b> SCP-213 can be convinced to aid others but is unreliable in battle, as they struggle to control their own abilities. When asked to use their powers, SCP-213 must roll Morale DR10. On a failure, they refuse, either from fear of harming themselves or others. They may also lash out in a panic if they believe they’re losing control.</p>
                                `,
                        "Weakness": `<p>Contained by keeping it in an anti-energy field that restricts its powers. Extreme caution is needed due to its ability to annihilate matter.</p>`,
                    }
                }
            }
        },
        {//SCP 231
            "id": "SCP231",//"SCP000"
            "name": "SCP 231-7 - The Seventh Bride",
            "safety_class": "Keter",
            "image": "images/SCP-231_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `Following repeated escape and suicide attempts, and based on the failure of containment for SCP-231-1 through 6, containment of SCP-231-7 has been amended to the following: SCP-231 is to be contained within a soundproof holding cell, adjacent to holding cells for six Class D Personnel assigned for the purposes of Procedure 110-Montauk. Cameras will monitor every inch of the cell at all times, and must be manned 24 hours a day. Malfunctioning monitoring equipment will be replaced without delay by psychologically screened staff. Doors will be magnetically locked, openable only by positive action by the control and monitoring facility. This includes all doors linking the main holding cell to those of the six Class D Personnel.
                            <p>SCP-231-7 is to be kept restrained to a hospital bed at all times except for the purposes of Procedure 110-Montauk. Hydration will be provided through IV drip. Feeding will be carried out twice per day through feeding tube by approved medical personnel who have not taken the Hippocratic Oath. Under no circumstances are narcotics, anesthesia, or other unapproved medications to be administered to SCP-231-7.</p>
                            <p>Procedure 110-Montauk is to be carried out at least once every 24 hours by Class D Personnel. During Procedure 110-Montauk, at least one Security Clearance 4/231 staff member must monitor the procedure by camera at all times, although the sound may be turned off if the vocalizations of SCP-231-7 become too distressing. Following the procedure, all Class D Personnel must return to their holding cells or explosive collars will be detonated. [DATA EXPUNGED PER ORDER OF O5-██ ON ██-██-████. INFORMATION MOVED TO EYES-ONLY DOCUMENT 231-110-MONTAUK. ACCESS TO 231-110-MONTAUK IS LIMITED TO PERSONNEL WITH SECURITY CLEARANCE 4/231]</p>
                        <p><b>Site and Personnel Requirements:</b>Under special order of O5-██, the following addendum is attached to the beginning of the file for SCP-231-7. All personnel assigned to SCP-231-7 must rotate out for one month of psychological counseling after two months on-site. SCP-231-7 is to be kept at an undisclosed location. All personnel assigned to SCP-231 will be transported there blindfolded from Site-19 by a route including no fewer than seven different forms of transportation, including but not limited to aircraft, automobile, underground tunnel, and ████████████. Removal of the blindfold during the transport process is grounds for immediate termination. Personnel assigned to SCP-231-7 must undergo heavy psychological testing before being cleared to enter the site. Individuals must score at least 72 points on the Milgram Obedience Examination, be unmarried, have no offspring, and express nothing less than total loyalty to the Foundation. Normal psychological screening procedures against Axis II disorders are waived, so long as the Class-D personnel in question has the mental capacity to carry out Procedure 110-Montauk as needed. Personnel who express sympathy towards SCP-231-7's plight and/or express a desire to rescue or sympathize towards SCP-231-7 will be transferred to another project without delay. Any actual rescue attempts will be met with immediate termination. Personnel who have served on the staff of SCP-231-7's Containment Team are not required to divulge that information to others. No official record shall be kept of the names of any staff assigned to SCP-231-7, nor will said service appear in the personnel files of said staff. While on-site, individuals assigned to SCP-231-7 will be issued concealing helmets with integrated voice changers to protect their identity. On-site staff are not to remove said uniforms in the presence of other staff members. Off-duty hours are to be spent in private quarters alone.</p>
                            <p>Six Class D Personnel are to be assigned to SCP-231-7 each month for the purposes of carrying out Procedure 110-Montauk. Violent criminals are not to be used for this purpose due to the possibility of accidental fatality during the 110-Montauk process.</p>
                            `,
                    "description": `SCP-231-7 is a █████ female between █ and ██ years of age, with [DATA EXPUNGED]. SCP-231-1 through 7 were retrieved from ██████████, ██, following a police raid on a warehouse owned by an organization called the Children of the Scarlet King (see article on ██-██-████ in the ████████████ ██████ newspaper, "Police Raid Satanic Sex Cult, Save Seven"). 24 hours after the rescue, SCP-231-1 (real name ████████████ ████████████) went into labor pains, giving birth three minutes later to SCP-██ (█████████ ██████████), causing a ██████████ event resulting in over ███ confirmed casualties. Foundation Personnel immediately took possession of remaining SCPs 231-2 through 231-7 and, based on notebooks recovered from the cult, instituted Procedure 110-Montauk to prevent future occurrences. `,
                    "additional": ``
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A young, broken girl burdened with the prophecy of birthing a world-ending entity, SCP-231-7, the last of the Seven Brides, was captured and held by the Foundation. Daily, she endured the harrowing Procedure-110-Montauk to prevent her child from being born—a monstrous ritual with catastrophic potential if not carried out.`,
                        "HP": `6`,
                        "Morale": `0 ("Utterly resigned, her spirit shattered")`,
                        "Armor": "5 (Arcane bindings and wards)",
                        "Speed": "None (kept bound and unable to move)",
                        "Other": `<b>Cataclysmic Birth:</b> Special`,
                        "SpecialAbilities": `
                                <p><b>Cataclysmic Birth (Event Trigger):</b> If SCP-231-7’s containment is compromised or if Procedure-110-Montauk is not performed within a 24-hour window, SCP-231-7 will enter labor, unleashing a destructive force as a consequence of her child’s birth. The event unfolds in three escalating phases:
                                    <ul>
                                        <li><b>Phase 1: The Summoning of Dread:</b> SCP-231-7’s screams cause an overwhelming dread. All creatures within 100 feet must pass a Presence DR 16 check or take D6 damage as terror and pain sear into their minds.</li>
                                        <li><b>Phase 2: Reality Tears Open:</b>The air distorts, and cracks appear in reality. Any creature within 50 feet must pass an Agility DR 14 check or fall prone, stunned for 1d3 rounds as reality warps around them. These cracks are filled with whispers from another realm, warning of the King’s arrival.</li>
                                        <li><b>Phase 3: Birth of the Herald of the Scarlet King:</b> SCP-999, a creature of warmth and compassion, emerges. Though appearing harmless, its aura weakens any hostile creatures within 30 feet, reducing their rolls by -2 until they move beyond its range. In this version of the tale, SCP-999 is prophesied as humanity's hope against the Scarlet King.</li>
                                    </ul>
                                </p>
                                <p><b>Ritual of A’habbat (Containment Procedure):</b> Procedure-110-Montauk is an extreme, highly dangerous ritual required daily to prevent SCP-231-7 from entering labor. The ritual’s dark and violent nature makes it especially traumatic for SCP-231-7, who is given Class-A amnestics weekly to forcefully erase her memory, ensuring her fear and suffering remain potent. Each day without performing the ritual increases the chance of Cataclysmic Birth by +1 on a D6 roll.</p>
                                <p><b>Aura of Desperation:</b> Any creature within 15 feet of SCP-231-7 must pass a Presence DR 12 check at the start of each round or take a -1 penalty to all rolls, weighed down by her overwhelming despair.</p>
                                `,
                        "Weakness": `<p>SCP-231-7’s psychological state is pivotal in containing her condition. Any attempts to offer her comfort, care, or hope risk triggering a change in her emotional state, potentially undermining Procedure-110-Montauk.</p>
                                <p>Due to her connection with SCP-999 and the prophecy of the Scarlet King’s eventual defeat, there is a hidden resilience within SCP-231-7. If SCP-231-7 is freed from containment, she becomes non-anomalous, ending her connection to the Scarlet King permanently. However, her child must be born under the guidance of a sacred ritual to prevent an apocalyptic disaster.</p>`,
                    }
                }
            }
        },
        {//SCP 280
            "id": "SCP280",//"SCP000"
            "name": "SCP 280 - Eyes in the Dark",
            "safety_class": "Keter",
            "image": "images/SCP-280_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-280 is to be contained in a 5 x 5 meter cell, and no equipment of any kind is to be left inside when staff are not present. Containment area is to be kept in total darkness at all times. Any items taken into the containment cell must be removed by staff at the end of testing, and any staff entering into containment must wear infrared goggles and be equipped with an infrared ID strobe and a strong flashlight.
                            <p>In the event of an SCP-280 attack, all staff are to power on their flashlights and illuminate the subject under attack. No aggressive action is to be taken against SCP-280, and staff are to keep one meter from SCP-280 at all times. Staff should continue to illuminate SCP-280 until it retreats to a sufficient distance to allow the recovery and extraction of the subject of the attack.</p>`,
                    "description": `SCP-280 is a black human-shaped mass with two large white eyes on the head and two hands with very long and thin fingers. No feet or legs are visible, as the lower portion of the body appears to fade away several centimeters from the ground. SCP-280 appears to be wholly composed of matter that can gain or lose corporeal form. This matter is very black, with only the eyes showing any other color, and when changing to a non-corporeal form, looks much like smoke.`,
                    "additional": `<p>The eyes are non-functioning, and appear only when SCP-280 is retreating, appearing to be used like eyespots on some insects. SCP-280 is very strong, and has been observed pulling apart steel with its hands, showing no sign of stress. SCP-280 moves with a gliding motion, with its hands extended, described as a “sleepwalker pose” by observers.</p>
                            <p>SCP-280 will move slowly towards any human beings and attempt to attack them. SCP-280 appears to sense human life; no limit has yet been found on this ability. SCP-280 will approach to within 14 centimeters of a subject, and then use its hands to pull and tear at the subject, causing massive physical trauma. The attack can last between one and five minutes, and will continue until the death of the subject, at which point SCP-280 will expose its eyes, lose corporeal form, and move to the next human. If no humans are present, SCP-280 will move and ball up against a wall or other structure until a human being is again present.</p>
                            <p>SCP-280 will retreat slowly from light, exposing its eyes in the direction of the light, or at any nearby humans. This has been described as extremely disconcerting by those who have been stared at. If the area that SCP-280 currently resides in becomes fully illuminated, or there is a very bright burst of light, SCP-280 will fade away and re-appear in another area. This appears to be done purely as a defensive response to light, and will not be used to follow or attack prey.</p>
                            <p>SCP-280 does not appear to eat, breathe, or sleep. It does not ingest any of the tissue removed during an attack, and simply drops it to tear a new piece. Due to its ability to become incorporeal at will, and its aggressive nature, no samples of SCP-280 have been collected.</p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A shadowy, amorphous figure with two large, white, glowing eyes, only visible in darkness and drawn toward signs of life and fear.`,
                        "HP": 15,
                        "Morale": `12 ("Relentless; it will only retreat if forced into bright light, where it feels exposed and vulnerable")`,
                        "Armor": " 3 (Shadow Form)",
                        "Speed": "Fast",
                        "Attack": `<ul>
                                    <li><b>Crushing Embrace:</b> When SCP-280 reaches a creature, it envelops them in a suffocating grasp. The target must succeed on a Toughness DR 14 test each round or lose D6 HP from the crushing pressure. On a critical failure, the target suffers an additional 1d4 HP as SCP-280's shadowy mass constricts further.</li>
                                    <li><b>Shadow Strike:</b> SCP-280 lashes out with shadowy tendrils when close to its target. Attack: DR 12, Damage: D4. Each hit instills dread, imposing -1 on the target’s next roll as fear intensifies.</li>
                                </ul>`,
                        "SpecialAbilities": `
                                <p><b>Hungry Darkness:</b> SCP-280 exists only in darkness, where it is invisible and drawn to sounds, movement, or fearful creatures. It targets the most frightened creature first.</p>
                                <p><b>Fear Aura:</b> All creatures within 10 feet of SCP-280 must make a Morale DR 12 test at the start of each round. Failure imposes a -1 to all rolls for that round due to overwhelming terror.</p>
                                <p><b>Shadow Leap:</b> SCP-280 can teleport instantly to any shadowed area within 20 feet once per round. It cannot use this ability in bright light.</p>
                                `,
                        "Weakness": `<p>Bright light forces SCP-280 to retreat, dealing it D4 damage per round while exposed. In bright light, it cannot attack or use its special abilities and will seek the nearest shadow to escape.</p>`,
                    }
                }
            }
        },
        {//SCP 294
            "id": "SCP294",
            "name": "SCP 294 - Coffee Machine",
            "safety_class": "Euclid",
            "image": "images/SCP-294_img.webp", // Static image for this SCP
            "info": {
                "": {
                    "containment": `There are no standard special containment procedures on file for Item SCP-294. However, only personnel of security clearance level 2 or higher are allowed to interact with it (see document SCP-294a). SCP-294 is currently being stored in the 2nd floor personnel break room and is monitored by two guards of security clearance level 3 at all times.`,
                    "description": `Item SCP-294 appears to be a standard coffee vending machine, the only noticeable difference being an entry touchpad with buttons corresponding to an English QWERTY keyboard. Upon depositing fifty cents US currency into the coin slot, the user is prompted to enter the name of any liquid using the touchpad. Upon doing so, a standard 12-ounce paper drinking cup is placed and the liquid indicated is poured. Ninety-seven initial test runs were performed (including requests for water, coffee, beer, and soda, non-consumable liquids such as sulfuric acid, wiper fluid, and motor oil, as well as substances that do not usually exist in liquid state, such as nitrogen, iron and glass) and each one returned a success. Test runs with solid materials such as diamond have failed, however, as it appears that SCP-294 can only deliver substances that can exist in liquid state.`,
                    "additional": `<p>It is of note that after approximately fifty uses, the machine would not respond to further requests. After a period of approximately 90 minutes, the machine seemed to have restocked itself. It is also interesting to note that many caustic liquids that would have eaten through a normal paper cup seemed to have no effect on the cups dispensed by the machine.</p>
                                   <p>Testing is ongoing. As suggested, SCP-294 was moved to the 2nd floor personnel break room as a money-saving venture. Following incident 294-01, guards were stationed at the item and a security clearance became necessary to interact with it.</p>
                                   <p><b>Document SCP-294a (regarding incident 294-01):</b> On August 21, 2005, Agent Joseph ██████ attempted to use Item SCP-294 to obtain coffee during his allotted break time at 9:30 AM. At the request of Agent █████ █████████ "to see what it would do", ██████ requested "a cup of Joe" from the item. Moments after confirming the selection, Agent Joseph ██████ began to sweat profusely and complained of dizziness before collapsing. After moving the unconscious agent to the infirmary, the medical team recovered the contents of the cup dispensed by Item SCP-294: a combination of blood, tissue, and other bodily fluids. Testing revealed the DNA sequence of the biological material dispensed by SCP-294 matched that of Agent ██████.</p>
                                   <p>Agent ██████ made a complete recovery after four weeks of rest and intravenous hydration. X-rays and CAT scans showed no further signs of injury, and ██████ was released. Both agents were reprimanded. Additional security measures for SCP-294 have been recommended.</p>
                                    `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A strange, ancient device made of brass and iron, adorned with mysterious symbols and an old, faded keypad with a small slot beneath it. By typing the name of any liquid and pulling the lever, the machine produces a small vial of the requested substance. Its origins are unknown, and it’s unclear if it truly understands the nature of what it produces.`,
                        "Usage": `Can dispense any liquid, once per hour
                                  <p><b>Requirements:</b> Typing a liquid name on the keypad and pulling the lever</p>`,
                        "SpecialAbilities": `
                                <p><b>Liquid Conjuring:</b> By entering the name of a liquid into the keypad (in any language the user knows) and pulling the lever, the Alchemical Apparatus dispenses a small vial of that liquid. This can be anything from basic water to a more exotic or magical liquid. However, the machine has a sense of irony, danger, and unpredictability, often interpreting requests in unexpected ways.</p>
                                <p><b>Roll for Liquid Quality:</b> When a liquid is requested, roll a d6 to determine the result:
                                    <ul>
                                        <li><b>1 - Malfunction:</b> The liquid produced is foul, poisonous, or corrupt. If consumed, it deals 1d8 damage or inflicts a curse (GM’s choice).</li>
                                        <li><b>2-3 - Inferior:</b> The liquid is a weak or diluted version of what was requested (e.g., healing potion restores only 1d4 HP, poison is weak and only mildly irritates the target).</li>
                                        <li><b>4-5 - Standard:</b> The liquid functions as expected, producing a vial of the requested substance with normal potency (e.g., 1d6 healing potion, standard poison, holy water, etc.).</li>
                                        <li><b>6 - Enhanced:</b> The machine produces a vial of highly potent liquid. Healing potions restore 2d6 HP, poisons are twice as deadly, and magical effects are amplified or doubled.</li>
                                    </ul>    
                                </p>
                                <p><b>Mystical Liquids:</b> Players can request exotic or mystical liquids such as "Healing Elixir," "Poison of Nightmares," "Liquid Luck," or even stranger substances. The machine interprets these requests creatively, though results may vary. GMs should consider adding side effects or surprises based on the liquid's potency.</p>
                                <p><b>Unexpected Interpretations:</b> SCP-294’s responses to requests are often ironic or dangerously literal. If a player requests something vague or abstract, such as “Death” or “Eternity,” they may get something horrific or unknowable. Here are a few examples of ambiguous requests and their potential results:
                                    <ul>
                                    <li><b>"Life":</b> Produces a bubbling, warm fluid that heals 1d6 HP, but the drinker must pass a Toughness DR12 or experience vivid hallucinations of another life.</li>
                                    <li><b>"Death":</b> Produces a cold, black liquid. Drinking it requires a Toughness DR16; failure results in instant death, while success grants immunity to fear for 24 hours.</li>
                                    <li><b>"Love":</b> A sweet-smelling elixir that, if consumed, causes the drinker to become irrationally attached to the nearest person or object for 1d4 hours.</li>
                                    <li><b>"Fire":</b> Produces a vial of volatile liquid. If thrown, it bursts into flames on impact, dealing 1d6 fire damage in a small area.</li>
                                    </ul>
                                </p>
                                <p><b>Risk of Corruption:</b> Each time the machine is used, roll a d20. On a natural 1, the machine malfunctions, producing a cursed or chaotic liquid instead of the intended substance. The cursed liquid may have unpredictable side effects, such as causing hallucinations, temporary blindness, madness, or another GM-chosen affliction. The machine will reset after 24 hours, restoring its ability to produce standard liquids.</p>
                                <p><b>Limited Use:</b> The machine can only produce one liquid per hour, and the process drains a small amount of the user's vitality, imposing a -1 to Presence rolls for the next hour as the user feels drained from interacting with the artifact.</p>
                                `
                    }
                }
            }
        },
        {//SCP 348
            "id": "SCP348",
            "name": "SCP 348 - A Gift from Dad",
            "safety_class": "Safe",
            "image": "images/SCP-348_img.jpg", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-348 is to be kept in a standard locker at Site-19. Personnel wishing to conduct tests involving SCP-348 are to obtain Level 3 or higher authorization, and present a detailed list of intended test subjects.`,
                    "description": ` SCP-348 is a white ceramic bowl patterned with light blue flowers, measuring approximately 20 cm in diameter and 9 cm high. While no maker’s marks are present, the Chinese characters for “thinking of you” (想着你, “xiǎng zhe nǐ”) are etched into the side of the bowl.`,
                    "additional": `<p>When in the presence of an individual afflicted with a minor ailment or injury (i.e., mild cough, runny nose, scrapes), SCP-348 will fill with soup. While the ingredients present within the soups produced by SCP-348 vary, young subjects (individuals between the ages of 4 and 18) have consistently stated that they enjoyed the meal, sometimes stating that it reminds them of their parents’ cooking. Subjects will finish the soup found in SCP-348 if allowed.</p>
                            <p>Children who eat from SCP-348 several times often express a feeling of contentment, stating that though they are eating by themselves, they do not feel lonely.</p>
                            <p><b>Addendum SCP-348-1:</b> SCP-348 was acquired shortly after rumors of a child living in █████, █████████ apparently possessing remarkable recovery abilities came to the Foundation’s attention. Investigation revealed that the child in question originally discovered SCP-348 in the attic of their house, and had come to rely on it after receiving insufficient attention from their parents. The child's parents, both full-time workers, refused to comment on their relationship with the child.</p>
                            <p>Resulting testing involving children was carried out under the guise of surveys to gauge the success of new food items offered at public schools.</p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A plain, well-worn ceramic bowl that seems ordinary at first glance. When filled with food, the bowl’s inner surface glows faintly, revealing faint messages that offer comfort or words of wisdom. Those who eat from it feel a strange sense of warmth and reassurance, but the bowl has a way of stirring hidden emotions and memories—both pleasant and painful.`,
                        "Usage": `Can be used to provide physical and emotional healing once per day
                        <p><b>Effect:</b> Eating from the bowl heals wounds and provides mental fortitude, but may also trigger memories or feelings of loss</p>`,
                        "SpecialAbilities": `
                                <p><b>Healing Nourishment:</b> When food is placed in the Bowl of Quiet Comfort, it provides a faint, soothing glow. Anyone who eats from the bowl regains 1d6 HP as they feel an overwhelming sense of comfort, like a fleeting memory of home or a caring presence. This effect can be used once per day.</p>
                                <p><b>Messages of Comfort:</b> After a meal, faint words appear at the bottom of the bowl, offering gentle reassurance or simple wisdom. Roll a d6 to determine the type of message:
                                    <ol>
                                        <li>“You are not alone.”</li>
                                        <li>“Remember, you are stronger than you think.”</li>
                                        <li>“I’m proud of you.”</li>
                                        <li>“You’ve come so far. Keep going.”</li>
                                        <li>“You are loved, even when you feel alone.”</li>
                                        <li>“Rest easy. Tomorrow will bring new strength.”</li>
                                    </ol>
                                The message lingers until the bowl is cleaned or refilled. Players can interpret the words however they like, but they often feel like they’re coming from a protective or paternal figure.
                                </p>
                                <p><b>Calming Aura:</b> The Bowl of Quiet Comfort has a calming aura that grants a +1 bonus to Morale checks for anyone who eats from it. The effect lasts for the next 24 hours, helping to stave off fear or despair. However, once the effect fades, users often feel a bittersweet sense of loss, as if the comforting presence has temporarily left them.</p>
                                <p><b>Memories of the Past:</b> Each time a character eats from the bowl, they must roll a Presence DR10. On a failure, they experience a memory of someone they’ve lost or a fragment of an old, comforting moment. While these memories may bring peace, they can also reopen old wounds. For the next 24 hours, the character suffers -1 to all rolls due to the emotional weight of the memory, which haunts them with feelings of nostalgia or sorrow.</p>
                                <p><b>Lasting Bond:</b> Characters who repeatedly eat from the bowl develop a subtle bond with it, feeling a compulsion to keep it close. If the bowl is ever lost or taken, they feel as if they’ve lost something deeply personal and meaningful, imposing -1 to all Morale checks until it is recovered.</p>
                                <p><b>Unyielding Fragility:</b> Despite appearing ordinary, the Bowl of Quiet Comfort is incredibly resilient and cannot be broken or damaged by conventional means. However, it will vanish if used in an act of violence or selfish greed, leaving behind only a faint, comforting warmth as it disappears.</p>
                                `
                    }
                }
            }
        },
        {//SCP 447
            "id": "SCP447",//"SCP000"
            "name": "SCP 447 - The Green Slime",
            "safety_class": "Safe",
            "image": "images/SCP-447_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-447-1 is to be kept within a fifty-gallon clear plastic container at all times, monitored by camera by a Security Level 3 or higher staff member to prevent overflow. Area is to be maintained at Level 1 Clean Room status to prevent contamination by foreign matter at a site at least 10 km from any cemetery, morgue, or mortuary. Under no circumstances is SCP-447 to be allowed to come into contact with dead bodies.
                                <p>Because SCP-447-1 constantly excretes a viscous greenish slime (designated SCP-447-2) at a rate of approximately 10 cc/hour, a Class D personnel in good physical condition is to be detailed to harvest the excreted slime at least once per day. SCP-447-2 can be harvested using any appropriate equipment, so long as safety procedures are carefully adhered to in order to prevent on-site fatalities. Slime can be transported in an ordinary sealed glass or plastic container through any standard mode of transportation, provided that there is no risk of the slime coming into contact with a dead body en route.</p>
                                <p>Although malodorous, the slime harvested from SCP-447-1 is nontoxic, noncorrosive, and nonradioactive. It is, in fact, perfectly safe so long as it does not come into contact with a dead body. The slime is edible, and reportedly makes a good salad dressing. Adding 10 cc of SCP-447-2 to one gallon of gasoline improves fuel efficiency by 150%. Furthermore, SCP-447-2 can be refined (see Appendix 447-C: Distillation Process) into a useful lubricant approved for use at all SCP Foundation installations, so long as said lubricant is never used to lubricate dead bodies.</p>
                                <p>All staff assigned to SCP-447 are to be screened by polygraph for any suicidal, necrophiliac, or homicidal tendencies. In addition, all staff assigned to SCP-447 must be in good health and good physical condition, and must adhere to on-site safety regulations at all times. This is to minimize the risk of SCP-447 or its generated slime coming into contact with a dead body.</p>
                                `,
                    "description": `SCP-447-1 is a green sphere approximately 5 cm in diameter, with a spongy surface texture and a weight of 1.37 kg. The object is warm to the touch, approximately the same temperature as a human body, although its core temperature is slightly higher. Personnel handling SCP-447-1 have reported no adverse effects, so long as SCP-447-1 does not come into contact with a dead body.`,
                    "additional": `<p>SCP-447 was retrieved by Foundation agents on ███████ in the city of ██████████, California, United States of America. The incident clearly illustrates the danger inherent in allowing either SCP-447 unit to come into contact with a dead body. For further information, please see Appendix 447-A: Retrieval Report.</p>
                                <p>The dangers of allowing SCP-447-1 or -2 to come into contact with dead bodies have been clearly documented: detailed eyewitness reports can be found in Appendix 447-B: Prior Incidents. To summarize, however, initial effects include [DATA EXPUNGED PER O5-LEVEL DIRECTIVE. RESEARCH INTO THIS FIELD FORBIDDEN UPON PAIN OF IMMEDIATE TERMINATION OR DEMOTION TO CLASS D. PLEASE CONTACT YOUR SUPERVISOR FOR MORE DETAILS].</p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A thick, viscous, green slime with an oddly pleasant smell. SCP-447 is harmless when in contact with living beings or objects, but it harbors an ominous power if it comes into contact with the dead. Its true effects are unknown, but witnesses report terrible, reality-warping consequences when it touches corpses.`,
                        "Other": `<p><b>Harmless to the Living:</b> The green slime is entirely harmless when it comes into contact with living creatures. It has a curious, calming effect, and any creature that touches it feels an unusual sense of peace and is healed for 1 HP once per day. It is strangely addictive, though, and any creature that touches it must pass a Presence DR 12 check or feel an overwhelming urge to touch it again.</p>
                                <p><b>Catastrophic Reaction to the Dead (Effect):</b> If SCP-447 comes into contact with a dead body, its properties change instantly and catastrophically. Any corpse touched by the slime creates a horrific anomaly. The GM should determine the specific outcome, but some possibilities include:
                                    <ul>
                                        <li><b>Unnatural Resurrection:</b> The corpse rises as an undead creature with unpredictable and dangerous behavior, attacking anything in sight.</li>
                                        <li><b>Rotting Disease:</b> A sickly green mist spreads from the corpse, dealing D4 damage per round to anyone within 10 feet until they leave the area.</li>
                                        <li><b>Reality Tear:</b> A rift opens, summoning horrors from another dimension or a twisted version of the corpse, with HP 8 and dealing 1d6 damage per hit.</li>
                                    </ul>
                                </p>
                                <p><b>Mutagenic Effect:</b> If a creature is splashed or soaked in SCP-447 for more than 1d4 rounds, they must make a Toughness DR 14 check. Failure causes subtle mutations over the course of 1d6 hours: growths, extra eyes, or green-tinted skin. This mutation imposes -1 to all Presence-based rolls due to the unsettling effects.</p>
                                <p><b>Mystic Attraction:</b> The green slime emits a strange, subtle hum that attracts undead or demonic entities within 100 feet. These entities are compelled to move toward it, becoming frenzied if they come within 10 feet. This effect lasts until the slime is removed or destroyed.</p>
                                `,
                        "Weakness": `<p>SCP-447 can be stored in a sealed container, and will not produce its catastrophic effects unless in direct contact with a corpse. It is relatively easy to transport as long as it’s carefully handled.</p>
                                <p>Though difficult to ignite, if SCP-447 is exposed to fire, it evaporates, emitting a harmless green smoke. Any attempts to burn it must succeed on a Toughness DR 12 due to its high viscosity.</p>`,
                    }
                }
            }
        },
        {//SCP 500
            "id": "SCP500",
            "name": "SCP 500 - The Panacea",
            "safety_class": "Safe",
            "image": "images/SCP-500_img.webp", // Static image for this SCP
            "info": {
                "": {
                    "containment": "SCP-500 must be stored in a cool and dry place away from bright light. SCP-500 is only allowed to be accessed by personnel with level 4 security clearance to prevent misapplication.",
                    "description": "SCP-500 is a small plastic can which at the time of writing contains forty-seven (47) red pills. One pill, when taken orally, effectively cures the subject of all diseases within two hours, exact time depending on the severity and amount of the subject's conditions. Despite extensive trials, all attempts at synthesizing more of what is thought to be the active ingredient of the pills have been unsuccessful.",
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A small, ruby-red pill contained within a plain glass vial. When held, it seems to pulse faintly with a warm glow, as if infused with a supernatural life force. Consuming the Crimson Panacea can cure any affliction or wound, and many believe it to be a remnant of divine power—or a dark curse bound in red. Legends speak of its miraculous effects, but few have ever seen one, and fewer still have lived to tell of its true nature.`,
                        "Usage": "Single-use; consuming one pill provides full effects",
                        "SpecialAbilities": `
                                <p><b>Miraculous Healing:</b> When consumed, the Crimson Panacea instantly heals the user to full HP, closing all wounds and even restoring severed limbs or lost body parts. All physical ailments, including poisons, diseases, and curses, are removed completely, as if they never existed. This effect is immediate and does not require a roll.</p>
                                <p><b>Cure-All Elixir:</b> In addition to healing injuries, the Crimson Panacea also removes any magical afflictions, curses, hexes, or ongoing effects plaguing the character. This includes enchantments or transformations, freeing the user from any condition or spell. However, this miraculous power only works once per pill, and multiple curses or ailments cannot be "stored up" for later use.</p>
                                <p><b>Temptation of the Divine:</b> The Crimson Panacea has an aura that draws the attention of both allies and enemies. If others see the character possess the pill, they may become jealous or desperate to acquire it. When revealed in a social context, there is a 1-in-3 chance that someone will attempt to steal or barter for the pill, believing it could save them from their own suffering. This effect applies to anyone aware of the pill's power, even loyal allies, and NPCs may react irrationally due to its allure.</p>
                                <p><b>Side Effects of the Divine:</b> The power of the Crimson Panacea is not without its cost. After consuming it, the user must make a Toughness DR14 roll. On a failure, they experience an intense "rebound" effect, suffering from disturbing visions, hallucinations, or intense physical weakness (-1 to all rolls) for the next 24 hours. The nature of these visions often hints at the origins of the pill, such as divine retribution, strange glimpses of distant worlds, or memories of previous users.</p>
                                <p><b>Rarity and Superstition:</b> Due to the legendary nature of the Crimson Panacea, possessing even a single pill is akin to holding a priceless relic. Rumors circulate that dark forces search endlessly for these pills, as they contain the essence of a forgotten god’s blood or an ancient curse sealed in form. Finding the Crimson Panacea may attract powerful entities or cultists who seek it for their own twisted purposes. The GM may introduce ongoing threats or encounters related to its possession.</p>
                                `
                    }
                }
            }
        },
        {//SCP 507
            "id": "SCP507",
            "name": "SCP 507 - Reluctant Dimension Hopper",
            "safety_class": "Safe",
            "image": "images/SCP-507_img.jpg", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-507 is allowed free roam of the facility, obviously barring anything that would breach security or safety protocols. Any time SCP-507 leaves its private quarters it must be accompanied by an agent, mostly at this point to make sure that it does not “shift” without the facility’s knowledge. SCP-507 should not be physically touched if there have been more than two weeks since its last “shift”; the risks inherent in disobeying this protocol make the action its own punishment, should the issue of disciplinary measures ever come up.
                            <p>When SCP-507 undergoes a shift, faculty will be informed to keep an eye out for its eventual reappearance. It also has a tracking device implanted into it, and a daily signal check should verify whether or not SCP-507 has returned from its trip. If it reappears in or nearby the facility, SCP-507 will return to its quarters on its own; otherwise, a retrieval team of three plainclothes agents may be sent to provide transportation back. Upon successful return, SCP-507 can be the subject of various physical tests up until two weeks after each shift.</p>
                            <p>It is worth noting that SCP-507 is allowed a computer with an Internet connection (via a proxy which strictly limits what information can be uploaded, and to where) in its room, and may petition to use/meet with/act as a test subject for Safe or Euclid SCPs that do not affect mental functions negatively or carry an infectious trait. This is a result of SCP-507's persistently clean record, and the implication that if SCP-507 was ever going to be a security leak it would have used its faux-teleportation powers to do so already. It is also worth considering that SCP-507 is actually below-average in most physical traits, and that in even worst case scenarios any SCP agent should be more than capable of carrying out a termination order.</p>
                            `,
                    "description": `SCP-507 is a Caucasian male with blond hair and green eyes, sporting no other outstanding characteristics besides being somewhat overweight and speaking with a vague accent of disputable origin. Although SCP-507 has an already-established name due to its unremarkable upbringing, it seems to find entertainment in forcing those it meets to give it a nickname in lieu of divulging this information. Thus SCP-507 will now respond to the names Tommy, Steve, Bruto, Guy, Houdini, and Grabnok the Destroyer.`,
                    "additional": `<p>SCP-507 was originally recovered from the ████ ██ asylum, when standard surveillance following repeated successful escape attempts brought its abilities to light. All records of this incident were confiscated, and SCP-507 was taken into custody under the pretense of moving it to a more secure facility.</p>
                            <p>The original theory was that SCP-507 possessed some form of teleportation ability, as it would suddenly disappear and eventually reappear in a different location. Subsequent interviews with the subject did verify that its ability could be used in such a manner, but that it was merely a side effect for its main affliction. SCP-507 holds that during its periods of “disappearance” it is actually displaced into a random alternate reality; the landscape generally stays the same, but the inhabitants and climate of the parallel world often do not. SCP-507 also insists that it has no control over the time and duration of these shifts; this has more-or-less been confirmed by the subject being known to “displace” at inconvenient times such as mid-sentence, while sleeping, or even while using on-site public facilities. If SCP-507 moves about in the alternate world, the eventual shift back will then place it at the corresponding area in our reality. A sample list of SCP-507s descriptions of alternate realities can be found in Document 507-00.</p>
                            <p>Mentally, SCP-507 shows no large deviations from the psychological profile for a normal person. It has confessed to have always had a great interest in the paranormal and mythological, which has directly led to its eventual permission to interact with relatively harmless SCPs. SCP-507 especially enjoys meeting with other sentient SCPs, once going so far as to request a small “vacation” to visit SCP-082. The request was eventually granted after persistent pleading from SCP-507, and the meeting was thankfully uneventful.</p>
                            <p><b>Document #507-00:</b> A sample list of SCP-507s supposed extradimensional travels, along with any demands made by it after returning.</p>
                            <p>Subject arrived in complete darkness, leading it to assume that the current location was indoors or subterranean. After fumbling about for a possible way out, subject heard a sound akin to muted breathing nearby. Subject then decided to curl up in the nearest corner and “wait it out” instead of risking a blind confrontation with an unknown creature.
                                <ul>
                                    <li>Request: A standard flashlight, which it now always carries on its person.</li>
                                </ul>
                            </p>
                            <p>Subject appeared in a replica of the facility, although apparently fallen into disuse. Further exploration led to the discovery of various corpses strewn about the area, all heavily decayed and covered in an odd type of mold. Upon noting that the “corpses” seemed to rhythmically expand and contract as if still breathing, subject attempted to leave the facility. This idea was quickly discarded when it opened an exit and found that the outside world was apparently coated with the same odd growth.
                                <ul>
                                    <li>Request: Heavy doses of voriconazole, and a fungal expert to help ascertain the nature of the mold. No exact match of the described mold was found, but it was noted to share many attributes with certain types of Cordyceps Fungi. [See Addendum 507-02]</li>
                                </ul>
                            </p>
                            <p>Upon reappearing, subject was reported to mutter “So many spiders.” Subject refused to elaborate.
                                <ul>
                                    <li>Request: A handheld firearm of any type. Request was granted under the stipulation that said firearm is specifically built to only use rubber bullets.</li>
                                </ul>
                            </p>
                            <p>Subject once again appeared in a pitch black location with breathing nearby. Upon turning on its flashlight, subject was surprised by a man wearing a black business suit and sunglasses, with an impossibly wide smile. Said “Smiling Man” was apparently leaning in toward SCP-507 when it turned on the light, the end result being that their faces were almost touching. Smiling Man then remarked “Back so soon?” before subject switched the light off again, discharged all the rounds in its firearm at the general vicinity of the man, and once more curled up into the nearest corner until shifted back into our reality.
                                <ul>
                                    <li>Request: None.</li>
                                </ul>
                            </p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A weary, disheveled figure with haunted eyes and a jittery disposition, SCP 507 has the misfortune of being pulled involuntarily into strange, parallel realms. This individual can appear suddenly, sharing tales of bizarre realms and horrors beyond comprehension. Their presence is both a curiosity and a warning of things lurking in alternate realities.`,
                        "HP": 8,
                        "Morale": "8 (frightened but used to strange encounters)",
                        "Armor": "1 (worn jacket, patches of strange materials from other dimensions)",
                        "Speed": "Normal",
                        "SpecialAbilities": `
                                <p><b>Uncontrolled Dimensional Shift:</b> : Every 1d4 hours, SCP-507 has a 1-in-3 chance of being involuntarily transported to an alternate dimension. They may return in 1d6 minutes, hours, or even days. During a shift, SCP-507 may experience hostile environments or injuries from encounters with strange entities, and may return with new knowledge, items, or scars from these realms.
                                    <ul>
                                        <li><b>Dimensional Instability:</b> If SCP-507 is ever in a high-stress situation (such as combat or intense fear), there is a 1-in-2 chance they will shift involuntarily to avoid danger, only to reappear later.</li>
                                    </ul>
                                </p>
                                <p><b>Lore of the Other Realms:</b> SCP-507 has witnessed countless strange and terrifying realities. They may share knowledge of bizarre creatures, alien landscapes, or cursed artifacts they’ve encountered, providing cryptic but sometimes useful hints about arcane phenomena or dimensional anomalies. They have a +1 to all Presence rolls related to identifying unknown phenomena or interpreting strange occurrences.
                                    <ul>
                                        <li><b>Storytelling Insight:</b> If a player asks SCP-507 for information, roll Presence DR10. On a success, SCP-507 provides helpful insight or lore. On a failure, their knowledge is confusing or irrelevant, hinting at horrors that only unsettle rather than enlighten.</li>
                                    </ul>
                                </p>
                                <p><b>Flickering Form:</b> Due to their dimensional instability, SCP-507 sometimes appears slightly translucent or shifts in and out of focus. Enemies attacking them must pass Presence DR12 to land a hit as SCP-507's form “flickers,” making it difficult to focus on them entirely.</p>
                                <p><b>Glimpses of the Beyond:</b> SCP-507 sometimes brings back fragments from other worlds. Roll a d6 after each shift to see if they return with something unusual:
                                    <ol>
                                    <li><b>Minor Mutation:</b> SCP-507’s eyes glow faintly or their skin turns an unusual color temporarily, causing discomfort to onlookers.</li>
                                    <li><b>Strange Artifact:</b> A small, alien object (e.g., a shard of crystal, an unfamiliar coin, a piece of bone) with no apparent purpose.</li>
                                    <li><b>Dimensional Mark:</b> SCP-507 bears a scar or brand from a creature in another dimension, giving them +1 Armor but -1 to Morale.</li>
                                    <li><b>Forbidden Knowledge:</b> They bring back a memory of a horrific creature or event, gaining +1 to Presence when dealing with the supernatural.</li>
                                    <li><b>Echoes of Another Realm:</b> Faint whispers follow them for 24 hours, making nearby allies uneasy, imposing -1 to their Morale checks.</li>
                                    <li><b>Powerful Relic:</b> SCP-507 has a rare, one-use artifact with a strange property (such as a vial of glowing liquid that heals or harms).</li>
                                    </ol>
                                </p>
                                <p><b>Survivor’s Tenacity:</b> Due to their many shifts and survival in hostile dimensions, SCP-507 gains +1 to all Toughness rolls. However, they also suffer from deep fatigue and paranoia, causing them to act cautiously and avoid forming bonds with others, fearing that they may vanish at any moment.</p>
                                `
                    }
                }
            }
        },
        {//SCP 610
            "id": "SCP610",
            "name": "SCP 610 - The Flesh that Hates",
            "safety_class": "Keter",
            "image": "images/SCP-610_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": ` Due to the vast area of 'infection' SCP-610 covers, containment is impossible. Isolation of the area has proved far more effective and permission has been granted by the Russian government to establish a perimeter to keep people out of these areas under the guise of military operations.
                                <p>Should any organism displaying traits consistent with SCP-610 be sighted near this perimeter then the established protocol requires it be engaged at range with small arms until immobile then dispatched using incendiary weapons and munitions from as great a distance as possible. Any living thing coming in physical contact with an organism infected with SCP-610 is considered expendable and is to be immediately terminated and incinerated. Any persons coming within three meters of SCP-610 infected life are to immediately withdraw from the area, be isolated from the rest of their team, and subjected to medical examination using only remote techniques to determine if infection has occurred and appropriate steps taken based on that determination.</p>
                                <p>At present the known infection vectors for SCP-610's spread seem to be focused on physical contact. Drone movements within heavily infected areas have returned air samples containing minute particulate which when exposed to organic compounds will result in the spread of SCP-610. The results of these particular tests have revealed that most require several days to manifest if at all, with the exception of direct contact with exposed lung and liver tissue. These particular tests show a rapid rate of growth which requires incineration of the testing environment no more than twenty-four hours after initial exposure, with even a two-hour mishap risking a compromised facility event. Given that this kind of rapid growth only occurs in organic material existing outside the human body, this form of infection is currently considered a minor concern.</p>
                                <p>These peculiarities have given rise to a series of questions regarding the possible origin of the infection in conjunction with the failed [DATA EXPUNGED]. Containment protocol remains at a scorched earth policy at this time and no concern for transmission via water or air at infection parameters exists barring situational changes in the field.</p>
                                `,
                    "description": `Initial reports of SCP-610 came direct from the Russian government through undisclosable channels. These reports consisted primarily of disappearances of farmers in the region and were not considered until the local police, followed by the regional police, and finally a government dispatched agent all failed to report in within a 72 hour period. A small military contingent was dispatched to the area and quickly withdrew at which point The Foundation was contacted to investigate.`,
                    "additional": `<p>The area SCP-610 affects is close to Lake Baikal in Southern Siberia. Areas of known infection are marked on a map provided to us <a href="https://scp-wiki.wdfiles.com/local--files/scp-610/610map.jpg">here</a>. Containment perimeters are marked in blue surrounding these infection areas and as of present no further locations have been identified. Incursions into the perimeter must be reported prior to conducting, confirmed during exploration, and debriefed on immediately following return.</p>
                            <p>The area SCP-610 affects is close to Lake Baikal in Southern Siberia. Areas of known infection are marked on a map provided to us here. Containment perimeters are marked in blue surrounding these infection areas and as of present no further locations have been identified. Incursions into the perimeter must be reported prior to conducting, confirmed during exploration, and debriefed on immediately following return.</p>
                            <p>SCP-610 appears to be a contagious skin disease at first with symptoms including rash, itching, and increased skin sensitivity. Within 3 hours the disease will cause blemishes resembling heavy scar tissue to form in the chest and arm areas, spreading to the legs and back within an additional hour, consuming the victim completely within five hours. Exposure to higher temperatures vastly decreases the time for the contagion to spread and complete infections have been recorded occurring in as little as five minutes.</p>
                            <p>After the completion of the infection occurs the victim's life functions will cease for approximately 3 minutes after which time they will restart at 2-3 times the activity rate of a normal human. Following this, the scar tissue on the victims will start to move of its own accord and grow at a rapid rate. Normal human features start to disappear at this point under the infection and the path of mutation appears to be largely random. Subjects observed in this stage of infection have been recorded as growing three or more limbs of a type such as arms or legs, the head may become misshapen and elongate or widen out, and parts of the subject may split open from which additional branches of flesh will grow. The duration of this stage of infection is unknown and not all subjects appear to progress to the later stages.</p>
                            <p>Under unknown conditions an infected individual will cease moving and place itself in a location it deems suitable where it roots itself. The fleshy growth on the victim will then begin to spread itself across all surrounding objects and consume them. Such objects do not spread the infection as living creatures do, however, and the effect of prolonged contact with these objects is recorded later in this document. It is assumed that this behavior is to create an area hospitable to continued growth of the other infected.</p>
                            <p>Observation of life infected by SCP-610 by staff is impossible. Those infected with the disease immediately seek out aid as natural human impulse resulting in unintended infections. Those infected past the scar tissue phase actively and aggressively attempt to infect anyone approaching them within an undefined area. It has been established that should an infected be capable of sight and observe an uninfected, it will proceed toward them. If the infected has lost the ability of sight, a range of approximately 30 meters is considered safe.</p>
                            <p>Observation of SCP-610 infected settlements has been established using artificial methods such as remote robots. The data returned from these observations coupled with the openly aggressive nature of the infected to attempt to spread SCP-610 has resulted in the Keter classification, however so long as nothing is allowed to enter or leave the infected areas it is considered a neutralized threat. Of concern are the cavernous areas beneath the infected settlements that were discovered during the exploration and attempts to get research personnel into these areas are underway.</p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A nightmarish disease that twists and mutates anything it infects into masses of writhing, pulsating flesh. Known only as The Flesh Blight, this curse transforms its victims into abominations and spreads like wildfire across flesh, earth, and stone. Those infected are quickly consumed and remade into monstrous, distorted versions of their former selves, all driven by a mindless desire to spread the infection. Entire regions have been overrun by The Flesh Blight, their landscapes transformed into living nightmares.`,
                        "Other": `
                                <p><b>The Flesh Blight Infection:</b> The Flesh Blight is a highly contagious infection that can spread through physical contact or prolonged proximity to infected terrain or creatures.
                                    <ul>
                                        <li><b>Effect:</b> Each time a character touches infected flesh or spends more than 10 minutes in an area corrupted by The Flesh Blight, they must roll Toughness DR14. On a failure, they are infected and begin to show symptoms within 1d4 hours.</li>
                                        <li><b>Infection Stages:</b>  Once infected, the character has 1d6 hours before the infection spreads fully, transforming them into a monstrous creature of living flesh. Infected individuals can be cured only by rare, powerful rituals or magic. If untreated, they become an Infected Flesh Construct (see below).</li>
                                    </ul>
                                </p>
                                <p><b>Living Terrain:</b> Areas corrupted by The Flesh Blight take on disturbing, organic qualities—walls and ground appear to be made of fleshy, pulsating tissue, covered in eyes, mouths, and limbs.
                                    <ul>
                                        <li><b>Effect:</b> While moving through Flesh Blight terrain, characters must roll Agility DR12 each hour to avoid being caught by grasping tendrils or sticky flesh. On a failure, they are held in place and must make a Strength DR12 to break free.</li>
                                        <li><b>Environmental Hazard:</b> The terrain itself can lash out, dealing 1d4 damage to anyone caught, as it attempts to pull them into the infected mass.</li>
                                    </ul>
                                </p>
                                <p><b>Infected Flesh Constructs:</b> Victims of The Flesh Blight infection transform into horrifying flesh monsters, losing their humanity and gaining grotesque features like extra limbs, eyes, and gaping maws.
                                    <ul>
                                        <li><b>Stats for Flesh Constructs:</b>
                                            <ul>
                                                <li><b>HP:</b> 10</li>
                                                <li><b>Armor:</b> 2 (thick, hardened flesh)</li>
                                                <li><b>Attack:</b> Lashing Tendrils – 1d6 damage (close range)</li>
                                                <li><b>Special:</b> Each attack from an Infected Flesh Construct has a 50% chance of spreading The Flesh Blight to the target.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                <p><b>Mutated Features:</b> Flesh Constructs can evolve strange mutations based on the original host. Roll a d6 to determine a construct’s unique mutation:
                                    <ol>
                                        <li>Multiple mouths, emitting a constant, maddening scream that imposes -1 to all Morale checks.</li>
                                        <li>Extra limbs, allowing an additional attack per round.</li>
                                        <li>Hardened, bony growths for +1 Armor.</li>
                                        <li>Eye clusters covering the body, giving advantage on detecting hidden creatures.</li>
                                        <li>Acidic flesh that deals 1d4 damage to anyone who touches it.</li>
                                        <li>Webbed tendrils that lash out, restraining nearby characters unless they pass Agility DR12.</li>
                                    </ol>
                                </p>
                                <p><b>Contagion Spread:</b> The Flesh Blight spreads relentlessly, infecting not only creatures but the land itself. The infected terrain grows over time, covering an additional 10 feet each day if left unchecked.
                                    <ul>
                                        <li><b>Effect:</b> Any item or weapon used on an infected creature has a chance (Presence DR10) of becoming contaminated and will spread the infection if used on another creature without cleaning.</li>
                                    </ul>
                                </p>
                                `,
                        "Weakness": `<p>High temperatures and fire are effective in containing and eliminating infected tissue.</p>`,
                    }
                }
            }
        },
        {//SCP 662
            "id": "SCP662",
            "name": "SCP 662 - Butler's Hand Bell",
            "safety_class": "Safe",
            "image": "images/SCP-662_img.webp", // Static image for this SCP
            "info": {
                "": {
                    "containment": `SCP-662 should be kept in its red velvet lined case and stored in High Value Storage locker 23C located at ███████ when not being utilized for testing or other appropriate activities. The item itself is safe to handle, and poses no known threats of any kind, though the effects generated could be considered highly valuable and variably powerful depending upon how the SCP is used.`,
                    "description": `SCP-662 is a small silver hand bell, 4 cm tall and 2 cm in circumference. The bell is missing its ringer. Within the inside of the bell, an inscription has been etched into the silver, reading: “Forever Mine – S.J.W.” The bell is susceptible to damage; however, given its safe nature, destruction has been deemed unnecessary. As it is made of very pure silver, it requires regular polishing to remain without tarnish.`,
                    "additional": `<p>When the bell is shaken as if to ring it, a soft chime can be heard (although this does not come from the bell). A short well-dressed Caucasian butler of self-proclaimed British heritage, calling himself Mr. Deeds, will appear from the nearest area not within line of sight, usually from around a corner. Mr. Deeds will address the ringer of the bell by their appropriate title and last name, and ask what it is they desire. His knowledge of individuals’ last names and titles is a mystery, as he himself will purport. Please see interview log 662-L1 for further details.</p>
                                   <p>Most reasonable requests given to Mr. Deeds will result in satisfaction. However, there are limits to what he can do. He is unable to produce very complex items such as sports cars, luxury homes, or personal jets. If he is allowed to leave line of sight and return, he is able to produce smaller, less complex items such as a ham sandwich, a glass of iced tea, or even more luxurious items like caviar or a brick of gold. A list of notable items the butler has thus far been able to provide to those who ring the bell may be found in addendum 662-A1.</p>
                                   <p>Mr. Deeds will also perform menial tasks, such as washing vehicles, preparing food, and cleaning bathrooms. If a request is deemed unreasonable or impossible by the butler, he will kindly tell the ringer so, and offer an alternative if one may be had.</p>
                                   <p>The butler is not immune to ill actions taken against him while in sight. He has been killed or injured in multiple tests, and will remain either dead or injured until he is out of sight. Upon return with a ring of the bell, all previous injuries will have vanished and he will be groomed and well dressed in his uniform, and ready for the next order.</p>
                                   <p>A more detailed explanation of the jobs he can perform and the limits to which he may be put can be found in the aforementioned interview log 662-L1. Test logs relating to his ability to heal himself, and those of the properties of the bell, may be accessed by any level 2 or higher personnel. All attempts to catch Mr. Deeds "disappearing" have failed, as equipment will either fail or he will find a suitable unobserved spot.</p>
                                `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A small, ornately crafted silver bell, engraved with delicate patterns that glint in the dimmest light. When rung, a well-dressed man with an air of quiet efficiency—known only as “Mr. Deeds”—appears as if from thin air, ready to serve the ringer with utmost courtesy. Mr. Deeds can fulfill many requests, but his abilities seem bound by certain rules and limitations that even he cannot explain.`,
                        "Usage": `Ring to summon Mr. Deeds once per day
                            <p><b>Limitations:</b> Requests for violence allowed, but often with conditions or unexpected outcomes</p>`,
                        "SpecialAbilities": `
                                <p><b>Summoning Mr. Deeds:</b>  Ringing the Butler’s Bell summons Mr. Deeds, an impeccably polite and formally dressed man. He greets the ringer respectfully and awaits instructions. Mr. Deeds can be summoned once per day, remaining for up to an hour or until he completes a task.</p>
                                <p><b>Fulfillment of Requests:</b> Mr. Deeds is capable of fulfilling a wide range of requests, including violent or lethal ones. However, such requests come with certain conditions or eerie undertones:
                                    <ul>
                                        <li><b>Direct Violence:</b> Mr. Deeds will comply if asked to harm or kill, but he may deliver a quiet warning before carrying out the act (e.g., “Very well, sir/madam, but such matters often carry… consequences”). When he acts violently, Mr. Deeds does so with cold efficiency, showing no remorse but leaving an unsettling aura in his wake.</li>
                                        <li><b>Lethal Actions:</b> He completes the task in his own way, often with unexpected or unsettling methods. For example, a simple request to “remove” someone may involve poison, strangulation, or causing an “accident” rather than direct combat.</li>
                                    </ul>
                                </p>
                                <p><b>Capabilities of Mr. Deeds:</b> Beyond violent tasks, Mr. Deeds can fulfill various requests, including:
                                    <ul>
                                        <li><b>Materializing Objects:</b> He can retrieve most non-magical, mundane items.</li>
                                        <li><b>Information Gathering:</b> He has knowledge of local lore, hidden dangers, and general insights but deflects questions about his origins.</li>
                                        <li><b>Healing:</b> He can restore 1d4 HP with expert medical care.</li>
                                        <li><b>Repair:</b> He can fix damaged items, restoring up to 1 Armor point on gear.</li>
                                    </ul>
                                </p>
                                <p><b>Dark Omens:</b> When asked to perform violent actions, there is a 1-in-4 chance that his actions create lingering consequences. Roll a d4 after he completes a violent request:
                                    <ol>
                                        <li>The victim’s spirit lingers, haunting the bell holder for 1d4 days.</li>
                                        <li>Mr. Deeds marks the user subtly (e.g., a handprint, bruise, or faint shadow), leaving them with a -1 to all Presence rolls for 24 hours.</li>
                                        <li>Mr. Deeds mutters a cryptic phrase or warning about “debts to be paid,” and the bell will not function again for 48 hours.</li>
                                        <li>No immediate consequences, but Mr. Deeds departs with a particularly cold or resentful farewell.</li>
                                    </ol>
                                </p>
                                <p><b>Polite but Sinister Detachment:</b> Mr. Deeds is unfailingly polite, but his tone when carrying out darker requests may shift subtly. He may comment on the morality or consequence of a request, offering a quiet, often chilling observation before or after fulfilling it. His origins and motivations remain mysterious, as he avoids answering questions about himself.</p>
                                <p><b>Mysterious Exit:</b> When dismissed, Mr. Deeds departs with a polite bow, and anyone attempting to watch him vanish becomes momentarily disoriented, as if they blinked and he simply disappeared. Characters left alone with the bell may feel lingering discomfort, as if they are being watched.</p>
                                `
                    }
                }
            }
        },
        {//SCP 668
            "id": "SCP668",
            "name": "SCP 668 - 13-Inch Chef's Knife",
            "safety_class": "Euclid",
            "image": "images/SCP-668_img.png", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `[REVISED] As of [DATA EXPUNGED], no special containment procedures aside from standard security are required. SCP-668 is to be transferred to a locked safe-deposit box at Site 19's High Value Item Storage Facility. Standard defenses against intrusion (explosive, chemical, biological, and memetic) are to be in place at all times, according to standard operating procedure.
                            <p>SCP-668 may only be removed from its safe-deposit box by personnel with Security Clearance 2 or higher. Individuals wishing to make use of SCP-668 outside Site 19 must first submit a Form-668 Requested Course of Action form to O5-11 and be fitted with an explosive killswitch collar on a 24-hour timer before taking SCP-668 into the field. An Auditing Officer with Security Clearance 4 or higher must confirm that SCP-668 has been returned to its safe-deposit box before the collar is deactivated.</p>`,
                    "description": `SCP-668 is a 33cm (13in) chef's knife with a rosewood handle and full-tang construction, crafted at some point from the late 1930s to the early 1940s. When first acquired by field operatives, SCP-668 was in badly rusted condition, with heavy pitting from blood stains and other bodily fluids trapped in micro-crevices within the blade. Following thorough analysis, these irregularities were removed for aesthetic purposes. This has had negligible, if any, effect on SCP-668's special properties.`,
                    "additional": `<p>The first recorded appearance of SCP-668 was in the 1960s, during the infamous [DATA EXPUNGED] case. [DATA EXPUNGED], a New York woman living alone, was allegedly raped and murdered by subject [DATA EXPUNGED]. Despite the fact that 38 witnesses reported hearing the attack, none of them attempted to aid the young woman for over six hours, until her eventual death. Whether the item received its properties due to this event, or whether it had them beforehand, is a matter of debate (see Dr. [REDACTED]'s paper re: the Bystander Effect, vs. Dr. [REDACTED]'s theory regarding psychic imprintation.)</p>
                            <p>What is clear, however, is its current properties. When carried by a human or humanoid entity with violent intent towards another human or humanoid entity, SCP-668 broadcasts a psychic signal that renders all sentient beings with a Psionic Resistance Index of 97 or lower incapable of assisting the victim. Affected entities report a sudden sense of apathy while under SCP-668's influence: sensory input is not affected, and affected entities report feeling revulsion and horror, but are simply incapable of acting, even indirectly, to assist the victim. Meanwhile, it renders the victim incapable of defending themselves against their attacker.</p>
                            <p>Tests using Class-D personnel have shown no upper limit in the number of entities affected by the psychic resonance. In one test, twelve Class D Personnel due for first-of-the-month termination were placed in a room alongside a researcher who was told to randomly select one test subject for death. The researcher killed all test subjects one by one, despite their professed horror. Prior incidents have indicated the possibility of hundreds, if not thousands of deaths due to SCP-668's unique properties (see Incident Report 668 A re: [REDACTED] Mall massacre and subsequent information blackout operations).</p>
                            <p>Recovery of SCP-668 in such scenarios is problematic due to the item's psychic properties. Agents attempting to apprehend the subject during Containment Failure Incidents are often themselves affected by SCP-668's so-called "Apathy Field," resulting in casualties among Foundation personnel. Following Incident 668-A, standard retrieval protocol includes the use of a long-range sniper rifle, double-blind conditions, and three different agents working in tandem through carefully coordinated actions to prevent any of them realizing that they are actively opposing the subject.</p>
                            <p>Because of the obvious apocalyptic possibilities, it is the recommendation of this panel that SCP-668 be designated a Keter-level threat and placed in high-level confinement.</p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A well-crafted 13-inch chef’s knife with a slightly tarnished blade and an ominous, crimson-stained handle that never quite loses its hue, no matter how often it’s cleaned. Known as The Blood-Soaked Blade, this weapon is said to have a mind of its own, urging its wielder to use it in the most brutal ways possible. Wielding this blade gives immense power, but it brings a thirst for blood that is difficult to control.`,
                        "HP": 0,
                        "Morale": 0,
                        "Armor": "",
                        "Speed": "",
                        "Attack": ``,
                        "Usage": ` Can be used in combat, but demands blood with each use.
                                <p><b>Damage:</b> 1d10+1 (with special effects)</p>
                                <p><b>Limitations:</b> Compels user to violent actions; inflicts penalties for attempting to resist the blade’s influence</p>`,
                        "SpecialAbilities": `
                                <p><b>Frenzy of the Blade:</b> When wielded in combat, the Blood-Soaked Blade incites its user into a frenzy, amplifying their violent impulses. Once drawn, the wielder must make a Presence DR12 check each round they hold the blade. On a failure, they are compelled to attack the nearest creature (friend or foe) with ruthless aggression.
                                    <ul>
                                        <li><b>Enhanced Damage:</b> While in this frenzy, the blade deals 1d10+1 damage, as the wielder’s attacks become unrestrained and brutal.</li>
                                        <li><b>Double-Edged Frenzy:</b> If no enemies are nearby, the wielder may turn on allies or even injure themselves, attacking with a wild desperation that knows no loyalty.</li>
                                    </ul>
                                </p>
                                <p><b>Bloodlust Curse:</b> The Blood-Soaked Blade grants the wielder heightened strength and agility in combat, but at a steep cost. Each time it draws blood, the wielder must pass a Toughness DR14 roll or suffer -1 to Presence for the next 24 hours as they become increasingly irritable, paranoid, and violent in temperament.
                                    <ul>
                                        <li><b>Stacking Effect:</b> Each failed roll makes the wielder progressively more violent and paranoid, leading them to act erratically even outside of combat. The penalty resets only if the wielder can go 24 hours without wielding the blade, though few manage to resist it that long.</li>
                                    </ul>
                                </p>
                                <p><b>Unholy Allure:</b> The blade has a subtle, insidious effect on the mind, making the wielder unwilling to part with it. Anyone who has wielded the Blood-Soaked Blade more than once must roll Presence DR10 each day they go without it. On a failure, they feel an overwhelming compulsion to retrieve or wield the blade again, regardless of the danger or consequences.</p>
                                <p><b>Voice of the Blade:</b> In moments of quiet, the wielder may hear faint whispers emanating from the blade, urging them toward violence or vengeance. These whispers are subtle but persistent, filling the wielder with thoughts of grudges, bloodshed, and revenge. The GM can use these whispers to manipulate the wielder, suggesting violent solutions to problems or preying on their fears and insecurities.</p>
                                <p><b>Insatiable Hunger for Blood:</b> The Blood-Soaked Blade cannot be sheathed or put away until it has tasted blood. If the wielder attempts to put it away without drawing blood, they must make a Presence DR16 roll. On a failure, they are forced to attack something nearby, even if it’s an inanimate object, just to satisfy the blade’s hunger.</p>
                                <p><b>Dark Infamy:</b> The blade’s dark nature gives it an aura that others can sense. Anyone in the presence of the Blood-Soaked Blade for too long feels uneasy, as if they’re being watched. Those with any magical sensitivity may recognize the blade’s cursed nature, and some creatures (like cultists, sorcerers, or supernatural beings) might be drawn to it, seeking its power for their own ends.</p>
                                `
                    }
                }
            }
        },
        {//SCP 682
            "id": "SCP682",
            "name": "SCP 682 - The Hard-to-Destroy Reptile",
            "safety_class": "Keter",
            "image": "images/SCP-682_img.jpg", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-682 must be destroyed as soon as possible. At this time, no means available to SCP teams are capable of destroying SCP-682, only able to cause massive physical damage. SCP-682 should be contained within a 5 m x 5 m x 5 m chamber with 25 cm reinforced acid-resistant steel plate lining all inside surfaces. The containment chamber should be filled with hydrochloric acid until SCP-682 is submerged and incapacitated. Any attempts of SCP-682 to move, speak, or breach containment should be reacted to quickly and with full force as called for by the circumstances.
                            <p>Personnel are forbidden to speak to SCP-682, for fear of provoking a rage-state. All unauthorized personnel attempting to communicate to SCP-682 will be restrained and removed by force.</p>
                            <p>Due to its frequent attempts at containment breach, difficulty of containment and incapacitation, and high threat of Foundation Exposure, SCP-682 is to be contained in site [REDACTED]. The Foundation will use the best of its resources to maintain all land within fifty (50) kilometers clear of human development.</p>
                            `,
                    "description": `SCP-682 is a large, vaguely reptile-like creature of unknown origin. It appears to be extremely intelligent, and was observed to engage in complex communication with SCP-079 during their limited time of exposure. SCP-682 appears to have a hatred of all life, which has been expressed in several interviews during containment. (See Addendum 682-B).`,
                    "additional": `<p>SCP-682 has always been observed to have extremely high strength, speed, and reflexes, though exact levels vary with its form. SCP-682's physical body grows and changes very quickly, growing or decreasing in size as it consumes or sheds material. SCP-682 gains energy from anything it ingests, organic or inorganic. Digestion seems to be aided by a set of filtering gills inside of SCP-682's nostrils, which are able to remove usable matter from any liquid solution, enabling it to constantly regenerate from the acid it is contained in. SCP-682's regenerative capabilities and resilience are staggering, and SCP-682 has been seen moving and speaking with its body 87% destroyed or rotted.</p>
                            <p>In case of containment breach, SCP-682 is to be tracked and re-captured by all available Mobile Task Forces, and no teams with fewer than seven (7) members are cleared to engage it. To date (██-██-████), attempted breaches have numbered at seventeen (17), while successful breaches have numbered at six (6). </p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `The Death Reptile is a colossal, ancient creature, with scales that shift color to match its surroundings and a body covered in scars from countless battles. This beast is a symbol of rage and resilience, adapting to every threat it faces and regenerating from almost any injury. Its loathing for life drives it to attack indiscriminately, destroying anything in its path. It cannot be killed by conventional means, and its regenerative abilities allow it to return even from seemingly fatal wounds.`,
                        "HP": "50 (Unkillable)",
                        "Morale": "Immune (relentless hatred of all life)",
                        "Armor": "4 (resilient, rapidly regenerating scales)",
                        "Speed": "Fast (moves with terrifying speed despite its size)",
                        "Attack": `Rending Claws – 1d12 damage, plus chance to Adapt`,
                        "SpecialAbilities": `
                                <p><b>Adaptive Resilience:</b> The Death Reptile instantly adapts to any form of harm, becoming resistant to attacks that previously damaged it.
                                    <ul>
                                        <li><b>Effect:</b> Each time it takes damage from a specific type of weapon, attack, or magic, it gains resistance to that attack type (half damage) for the rest of the encounter. After three instances of adaptation, it becomes immune to that form of damage altogether.</li>
                                        <li><b>Examples of Adaptation:</b>  If struck by fire magic, it quickly becomes resistant and then immune to fire. If slashed by a sword repeatedly, it may adapt to resist bladed weapons.</li>
                                    </ul>
                                </p>
                                <p><b>Regenerative Healing:</b> SCP-682’s flesh and bones regenerate at an unnatural rate, allowing it to heal even mortal wounds.
                                    <ul>
                                        <li><b>Effect:</b> Each round, the Death Reptile recovers 1d8 HP unless exposed to a specific vulnerability (determined by GM or experimentation).</li>
                                        <li><b>Immortality:</b>  If “killed” (reduced to 0 HP), SCP-682 will retreat, only to regenerate fully within 1d4 hours. Destroying it permanently requires finding and exploiting a hidden weakness (left to GM discretion, if possible).</li>
                                    </ul>
                                </p>
                                <p><b>Terrifying Presence:</b> SCP-682’s sheer malevolence and hate-filled gaze instill fear in all who look upon it.
                                    <ul>
                                        <li><b>Effect:</b> Any creature within 15 feet of SCP-682 must pass a Morale DR14 check at the beginning of each round or be paralyzed with terror, losing their turn.</li>
                                        <li><b>Psychological Impact:</b> Those who witness SCP-682’s resurrection or regeneration must make a Presence DR12 check to avoid despair, suffering -1 Morale if they fail.</li>
                                    </ul>
                                </p>
                                <p><b>Contagion of Hate:</b> SCP-682’s hatred is so intense that it manifests as a toxic aura, spreading dread and madness to those nearby.
                                    <ul>
                                        <li><b>Effect:</b> Any creature within 10 feet takes 1d4 damage per turn from the sheer weight of SCP-682’s malevolent aura. Those affected by the aura feel overwhelming despair and may suffer a cumulative -1 to Morale for each minute spent in close proximity.</li>
                                        <li><b>Infectious Rage:</b> Characters exposed to the aura for more than 3 rounds must roll Presence DR14 or develop a temporary, irrational anger toward allies and creatures nearby, acting unpredictably.</li>
                                    </ul>
                                </p>
                                
                                `,
                        "Weakness": `<p>Very difficult to kill, although exposure to acids and high-damage attacks can temporarily disable it. Permanent termination has proven unsuccessful.</p>`,
                    }
                }
            }
        },
        {//SCP 884
            "id": "SCP884",
            "name": "SCP 884 - A Collection of Obsessive Objects",
            "safety_class": "Euclid",
            "image": "images/SCP-884_img.jpg", // Static image for this SCP
            "info": {
                "": {
                    "containment": `<a style=" text-decoration: line-through;">SCP-884-4 is to be stored in Locker 147 at Site-██. SCP-884-4 may be requisitioned for research with approval of either Dr. Cho or Dr. Ignit. </a>
                                Due to the events of January 11, 20██, all access to SCP-884-4 is currently denied, and all requests to examine or test SCP-884-4 are to be submitted directly to O5-█ for approval. SCP-884-4 is to be placed in Deep Storage at Site-██.`,
                    "description": `SCP-884-4 is a men’s shaving mirror, made of glass and ivory, presumably constructed at some point around 1914. It is the last remaining object in what was originally a complete set of men’s grooming tools, the others having been lost to testing and theft early this century. (Other notable examples included SCP-884-2, alias “The Razor,” which was stolen by the Chaos Insurgency during their split with the Foundation, and SCP-884-6, alias “The Comb,” which was neutralized following Incident SCP-884-6-4172. `,
                    "additional": `SCP-884-4 possesses a mild hallucinogenic quality. Subjects who have used it while shaving reported an inability to perceive the removal of hair, causing repeated attempts to shave areas of the face that, in reality, have already been shaved. This usually results in irritation and has, in one instance, contributed to the accidental severing of the carotid artery. <a style=" text-decoration: line-through;">Other than this, no significant effects have been recognized. As of December 12, 19██, SCP-884-4 is remanded to Storage Locker 147 at Site-██. </a>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A set of exquisitely crafted objects, each bearing an eerie, otherworldly allure. Rumored to have belonged to a powerful sorcerer, these objects carry a dreadful curse, compelling anyone who uses them to obsession and self-destruction. While each object offers a small benefit, its power comes with the cost of one’s sanity.`,
                        "Usage": `Each item can be used individually; each induces specific compulsions or curses
                                <p><b>Warning:</b> Characters feel an eerie draw to use the items, despite a sense of foreboding</p>`,
                        "SpecialAbilities": `
                                <p><b>The Mirror of Envy:</b> A small, beautifully framed handheld mirror. When gazing into it, the user sees themselves as more beautiful, stronger, or healthier than they really are.
                                    <ul>
                                        <li><b>Effect:</b> Grants +1 to all Presence rolls for the next hour, as the character feels confident and charismatic.</li>
                                        <li><b>Curse:</b> Each time the mirror is used, the user must roll Presence DR12. On a failure, they become obsessed with their appearance, frequently checking their reflection and falling into despair if they look away. The obsession worsens with each failure, causing -1 to all other rolls for every subsequent failure, as they become increasingly distracted and dissatisfied with their real appearance.</li>
                                    </ul>
                                </p>
                                <p><b>The Razor of Perfection:</b> A finely honed straight razor with an ornate handle. Using it feels empowering, as if it can cut through anything.
                                    <ul>
                                        <li><b>Effect:</b> For 24 hours after handling the razor, the user gains +1 to Agility-based attacks as they feel sharp and precise.</li>
                                        <li><b>Curse:</b> After each use, the user must roll Toughness DR14. On a failure, they develop an uncontrollable compulsion to shave or "trim away" perceived imperfections, even if it means cutting their own skin. Each failure results in 1d4 damage from self-inflicted wounds, and the compulsion becomes harder to resist with each failure.</li>
                                    </ul>
                                </p>
                                <p><b>The Comb of Control:</b> A delicate, silver comb that gives the user a fleeting sense of order and control when used.
                                    <ul>
                                        <li><b>Effect:</b> Provides +1 to any single Presence or Intelligence-based roll, as the user feels a momentary clarity of mind.</li>
                                        <li><b>Curse:</b> Each time the comb is used, the user must roll Presence DR14. On a failure, they become obsessed with order and cleanliness, feeling compelled to constantly groom themselves or arrange their surroundings. The obsession disrupts their focus, imposing -1 to all rolls until they spend 1 hour performing ritualistic grooming or cleaning.</li>
                                    </ul>
                                </p>   
                                <p><b>The Ring of Admiration:</b> A simple yet captivating ring that makes the wearer feel admired and respected.
                                    <ul>
                                        <li><b>Effect:</b> Grants +1 to Morale checks for as long as the ring is worn.</li>
                                        <li><b>Curse:</b> Each day the ring is worn, the wearer must roll Presence DR12. On a failure, they become addicted to attention, seeking validation from others and growing resentful if ignored. If deprived of admiration or positive attention, they suffer -1 to all Presence and Morale checks due to feelings of inadequacy and desperation.</li>
                                    </ul>
                                </p>
                                <p><b>The Pen of Precision:</b> A fine ink pen that feels unusually balanced and sharp in hand. Using it enhances the user’s ability to write or draw with uncanny accuracy.
                                    <ul>
                                        <li><b>Effect:</b> Grants +1 to all Intelligence-based rolls for an hour, as the user feels focused and detail-oriented.</li>
                                        <li><b>Curse:</b> After each use, the user must roll Intelligence DR14. On a failure, they develop an obsessive need to record every detail, losing time in their compulsive note-taking or drawing. They take -1 to all rolls if unable to fulfill this compulsion, as their mind becomes clouded with the need to capture everything perfectly.</li>
                                    </ul>
                                </p>                          
                                `
                    }
                }
            }
        },
        {//SCP 914
            "id": "SCP914",
            "name": "SCP 914 - The Clockworks",
            "safety_class": "Safe",
            "image": "images/SCP-914_img.webp", // Static image for this SCP
            "info": {
                "": {
                    "containment": `Only personnel who submit a formal request and receive approval from site command may operate 914. SCP-914 is to be kept in research cell 109-B with two guard personnel on duty at all times. Any researchers entering 109-B are to be accompanied by at least one guard for the entirety of testing. A full list of tests to be carried out must be given to all guard personnel on duty; any deviation from this list will result in termination of testing, forcible removal of personnel from 109-B, and formal discipline at site command’s discretion.
                            <p><b>WARNING:</b> At this time, no testing of biological matter is allowed. Refer to document 109-B:117. Applying the “Rough” setting to explosive materials is not advised.</p>
                            `,
                    "description": "SCP-914 is a large clockwork device weighing several tons and covering an area of eighteen square meters, consisting of screw drives, belts, pulleys, gears, springs and other clockwork. It is incredibly complex, consisting of over eight million moving parts comprised mostly of tin and copper, with some wooden and cloth items observed. Observation and probing have showed no electronic assemblies or any form of power other than the “Mainspring” under the “Selection Panel”. Two large booths 3mx2.1mx2.1m (10ftx7ftx7ft) are connected via copper tubes to the main body of SCP-914, labeled “Intake” and “Output”. Between them is a copper panel with a large knob with a small arrow attached. The words Rough, Coarse, 1:1, Fine, and Very Fine are positioned at points around the knob. Below the knob is a large “key” that winds the “mainspring”.",
                    "additional": `<p>When an object is placed in the Intake Booth, a door slides shut, and a small bell sounds. If the knob is turned to any position and the key wound up, SCP-914 will “refine” the object in the booth. No energy is lost in the process, and the object appears to be in stasis until the Output Booth door is opened. Intense observation and testing have not shown how SCP-914 accomplishes this, and no test object has ever been observed inside SCP-914 during the “refining” process. The process takes between five and ten minutes, depending on the size of the object being refined.</p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A massive, intricate machine of unknown origin, covered in brass gears, iron cogs, and strange levers. It hums faintly with a sense of dormant power, waiting for something—or someone—to be placed inside. Etched near its levers are words in an ancient tongue: Rough, Coarse, 1:1, Fine, and Very Fine. None can say for sure what will emerge on the other side.`,
                        "Usage": "Activated by placing an item (or creature) inside and selecting a setting",
                        "SpecialAbilities": `
                                <p><b>Rough:</b> 
                                    <ul>
                                        <li><b>Description:</b> The Rough setting brutally deconstructs anything placed within the machine, leaving it in a damaged or near-unusable state.</li>
                                            <li><b>Effects:</b>
                                                <ul>
                                                <li>Items: Destroyed beyond repair, reduced to fragments or dust.</li>
                                                <li>Weapons: Reduced to scrap metal; unusable.</li>
                                                <li>Armor: Torn or shattered; reduces its Armor value by 1 permanently.</li>
                                                <li>Living Beings: Roll Toughness DR16 to survive. On a success, the creature is left bloodied, suffering 1d6 damage and a -1 to all rolls for the next 24 hours. On a failure, they are crushed and torn apart beyond recognition.</li>
                                                </ul>
                                            </li>
                                        </li>
                                    </ul></p>
                                <p><b>Coarse:</b> 
                                    <ul>
                                        <li><b>Description:</b> The Coarse setting crudely alters objects, breaking them down and reassembling them in a lesser form.</li>
                                            <li><b>Effects:</b>
                                                <ul>
                                                <li>Items: Downgraded in quality (e.g., fine clothes become rags, a torch becomes a dim candle).</li>
                                                <li>Weapons: Loses 1 damage die (e.g., a 1d8 weapon becomes 1d6).</li>
                                                <li>Armor: Loses 1 Armor point permanently, making it weaker but still usable.</li>
                                                <li>Living Beings: Roll Toughness DR14 to resist the alteration. On a failure, the creature suffers disfigurement, reducing Presence by 1. They are left scarred or physically altered in a coarse and unsettling way.</li>
                                                </ul>
                                            </li>
                                        </li>
                                    </ul></p>                                
                                <p><b>1:1:</b> 
                                    <ul>
                                        <li><b>Description:</b> The 1:1 setting swaps or replaces the object with something similar in shape or function, though not always in the way expected.</li>
                                            <li><b>Effects:</b>
                                                <ul>
                                                <li>Items: Transformed into something of equal value but different nature (e.g., a torch becomes a small oil lamp, a dagger becomes a broken sword).</li>
                                                <li>Weapons: Changes into another weapon with the same damage die, but perhaps a different type (e.g., a sword becomes an axe).</li>
                                                <li>Armor: Replaced by equivalent armor of a different material or look.</li>
                                                <li>Living Beings: Roll Toughness DR12. On a success, they undergo a harmless transformation, perhaps altering minor physical traits or acquiring a peculiar mark. On a failure, the creature changes unpredictably (e.g., a character’s arm might become covered in scales, or their voice changes pitch drastically).</li>
                                                </ul>
                                            </li>
                                        </li>
                                    </ul></p>   
                                <p><b>Fine:</b> 
                                    <ul>
                                        <li><b>Description:</b> The Fine setting enhances or upgrades the item placed inside, making it more effective or durable.</li>
                                            <li><b>Effects:</b>
                                                <ul>
                                                <li>Items: Enhanced in quality; mundane items become impressive or finely crafted.</li>
                                                <li>Weapons: Gains +1 to damage rolls, as the weapon becomes sharper or sturdier.</li>
                                                <li>Armor: Gains +1 Armor, improved in durability and fit.</li>
                                                <li>Living Beings: Roll Toughness DR10. On a success, the creature becomes slightly enhanced, gaining +1 to a stat of their choice for 24 hours. On a failure, they experience mild side effects (e.g., a persistent itch, strange dreams) but no lasting harm.</li>
                                                </ul>
                                            </li>
                                        </li>
                                    </ul></p>   
                                <p><b>Very Fine:</b> 
                                    <ul>
                                        <li><b>Description:</b> The Very Fine setting pushes the machine’s power to its limits, creating effects that are unpredictable, extraordinary, or dangerously unstable.</li>
                                            <li><b>Effects:</b>
                                                <ul>
                                                    <li>Items: Transformed into something miraculous or cursed. Roll a d6
                                                        <ul>
                                                        <li>1-3: The item gains a magical enhancement (e.g., a weapon that glows faintly and deals an extra 1d4 damage).</li>
                                                        <li>4-6: The item becomes cursed or unstable, applying a -1 penalty to all rolls while in possession, or it begins to emit strange, uncontrollable effects (e.g., glowing randomly, whispering).</li>
                                                        </ul>
                                                    </li>
                                                <li>Weapons: Gains +1d4 damage but has a 1-in-4 chance of breaking after each use.</li>
                                                <li>Armor: Gains +2 Armor but causes mild disfigurement or a strange aura.</li>
                                                <li>Living Beings: Roll Toughness DR14. On a success, the character gains a permanent +1 to a stat of their choice. On a failure, they suffer a permanent mutation or curse (e.g., a limb grows longer, they glow faintly, or suffer from unpredictable fits of laughter).</li>
                                                </ul>
                                            </li>
                                        </li>
                                    </ul></p>                                       
                                `
                    }
                }
            }
        },
        {//SCP 936
            "id": "SCP936",
            "name": "SCP 936 - With many voices",
            "safety_class": "Keter",
            "image": "images/SCP-939_img.jpg", // Static image for this SCP
            "info": {
                "": {
                    "containment": `SCP-939-1, -3, -19, -53, -89, -96, -98, -99, and -109 are kept in Cell 1163-A or 1163-B, 10 m x 10 m x 3 m containment chambers within Armed Bio-Containment Area-14. Both cells are environmentally regulated and negatively pressurized, with walls constructed of reinforced concrete. Access to these cells is regulated by an outer decontamination chamber and inner gas-tight steel security doors. Observation windows are constructed of laminated ballistics glass 10 cm in thickness protected by a 100kV electrified mesh. Humidity is maintained at 100% at a temperature of 16° C. Specimens are monitored at all times via infrared cameras. Level Four authorization is required to access SCP-939, their containment areas, or the observation chambers.
                            <p>SCP-939-101 is dismembered and stored in Cryogenic Preservation Tanks 939-101A to 939-101M within Bio-Research Area-12. Access to SCP-939-101 requires authorization by two Clearance Level 3 personnel, one of which must be present for all research and testing. The contents of only one (1) 939-101 tank may be accessed at any given time. Core temperature of SCP-939-101 tissues must be monitored while removed from cryogenic preservation; should core temperature exceed 10° C, tissues are to be returned to their corresponding tank and all testing suspended for a period of seventy-two (72) hours. Barring core temperature exceeding 10° C, research of SCP-939-101 tissues may continue as long as its ramblings and pleas for release may be tolerated.</p>
                            <p>Containment cells should be cleaned biweekly. While this takes place, SCP-939 specimens will be transferred to the adjacent cell. During this time, the cell's door and observation window must be inspected for damage and repaired or replaced accordingly.</p>
                            <p>Heavy sedation of all SCP-939 is required before any interaction, including transfer between cells and experimentation, may take place. See Document #939-TE4 for transfer and experimentation protocol.</p>
                            <p>Level C Hazmat gear is to be worn by personnel during interactions with SCP-939 specimens and in any areas which SCP-939 have been known to inhabit. Afterward, standard decontamination procedures are to be observed by all personnel involved to ensure no secondary spread of amnestic agents occurs.</p>
                            <p>Following Incident ABCA14-939-3, all non Class D personnel interacting with SCP-939 for any length of time are required to wear two (2) water-proof electronic pulse monitors for the duration of such interaction. These pulse monitors will transmit to a wireless monitoring system independent of a facility's main power grid, with at least one backup power system on standby. Should both an individual's pulse monitors flat-line or otherwise malfunction, the wearer will be presumed dead, personnel instructed to disregard all the wearer's subsequent vocalizations, and a breach of containment declared automatically. Security personnel responding to such a breach are likewise required to wear these pulse monitors.</p>
                            <p>Additionally, all live SCP-939 must be implanted with subdermal tracking devices upon capture.</p>`,
                    "description": "SCP-939 are endothermic, pack-based predators which display atrophy of various systems similar to troglobitic organisms. The skins of SCP-939 are highly permeable to moisture and translucent red, owing to a compound chemically similar to hemoglobin. SCP-939 average 2.2 meters tall standing upright and weigh an average of 250 kg, though weight is highly variable. Each of their four limbs end in three-fingered claws with a fourth, opposable digit, and are covered in setae which considerably augment climbing ability. Their heads are elongated, devoid of even vestigial eyes or eye sockets, and contain no brain casing. The jaws of SCP-939 are lined with red, faintly luminescent fang-like teeth, similar to those belonging to specimens of the genus Chauliodus, up to 6 cm in length, and encircled by heat-sensitive pit organs. Eye spots, sensitive to light and dark, run the length of their spined dorsal ridges. These spines may be up to 16 cm long and are believed to be sensitive to changes in air pressure and flow.</p>",
                    "additional": `<p>SCP-939 do not possess many vital organ systems; central and peripheral nervous systems, circulatory system, and digestive tract are all absent. SCP-939's respiratory system is atrophied and serves no apparent purpose beyond spreading AMN-C227 (see below). SCP-939 have no apparent physiological need to feed, nor any way to digest consumed tissue. Ingested material typically accumulates in the respiratory system of SCP-939 and is regurgitated once the amount is sufficient to markedly inhibit its function. Despite the absence of many vital organ systems, SCP-939 are capable of bearing live young. <b>See Addendum 10-16-1991.</b></p>
                            <p>SCP-939's primary method of luring prey is the imitation of human speech in the voices of prior victims, though imitation of other species and active nocturnal hunts have been documented. SCP-939 vocalizations often imply significant distress; whether SCP-939 understand their vocalizations or are repeating previously heard phrases is the subject of ongoing study. How SCP-939 acquire voices is not currently understood; specimens have been documented imitating victims despite never hearing the victim speak. Analysis of SCP-939 vocalizations cannot distinguish between SCP-939 and samples of known victims' voices. The use of biometric voice-recognition security or identification systems at any installation housing SCP-939 is strongly discouraged for this reason. Prey is usually killed with a single bite to the cranium or neck; bite forces have been measured in excess of 35 MPa.</p>
                            <p>SCP-939 exhale minute traces of an aerosolized Class C amnestic, designated AMN-C227. AMN-C227 causes temporary anterograde amnesia, inhibiting memory formation for the duration of exposure, plus an average of thirty (30) minutes. It is colorless, odorless, and tasteless with an estimated ECt50 for inhalation of 0.0015mg•min/m3. In well-ventilated or open air environments, risk of exposure to ECt50 is greatly reduced but not negligible. AMN-C227 is typically undetectable in the bloodstream sixty (60) minutes following cessation of exposure. Reported sensations of disorientation and mild hallucinations immediately following removal from environments saturated with the agent are similar to recreational use of numerous psychoactive substances and easily mistaken as such.</p>
`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `Sleek, red-skinned creatures with emaciated frames and tooth-filled maws. They are silent hunters, moving without a sound, and capable of imitating voices they’ve heard to lure victims closer. Those who hear their voices rarely live to tell the tale.`,
                        "HP": 10,
                        "Morale": 10,
                        "Armor": "1 (Thick, rubbery hide)",
                        "Speed": "Fast (they are swift and stealthy in their movement)",
                        "Attack": "Bite 1d8 + special",
                        "SpecialAbilities": `
                                <p><b>Blind Hunters:</b> SCP-939 is completely blind and relies on acute hearing and vibration sensitivity to detect its surroundings. Any attempts to stay completely silent or hold still can make it difficult for SCP-939 to detect prey.
                                    <ul>
                                        <li>Stealth Advantage: Characters who are actively staying silent or holding still gain advantage on Presence checks to remain undetected (lowering the DR by -2).</li> 
                                        <li>Noise Vulnerability: Loud noises, like explosions or clanging metal, disorient SCP-939, making them retreat for 1d4 rounds to recalibrate.</li>
                                    </ul></p>
                                <p><b>Mimicry:</b> SCP-939 can imitate voices it has heard to lure prey, typically mimicking loved ones or people in distress. Characters hearing this must make a Presence DR14 check. On a failure, they believe the sound is genuine, possibly drawing them closer. This effect is especially dangerous because it targets a sense of familiarity and trust.</p>
                                <p><b>Pack Hunters:</b> SCP-939 hunts in groups, coordinating to surround and ambush targets. When one SCP-939 attacks, any other SCP-939 within range gains +2 to their next attack roll against the same target.</p>
                                <p><b>Silent Movement:</b> SCP-939 moves without making a sound, which makes it exceptionally difficult to detect based on noise. Presence checks to detect SCP-939’s approach are at a disadvantage (increase DR by +2).</p>
                                <p><b>Bite:</b> 
                                    <ul>
                                        <li>Damage: 1d8 + special</li> 
                                        <li>Special: On a successful hit, the target must make a Toughness DR12 or suffer intense blood loss, taking 1 additional damage at the end of each round until they receive first aid or magical healing.</li>
                                    </ul></p>
                                <p><b>Hallucinogenic Exhalation:</b> SCP-939 exhales a subtle, hallucinogenic gas that affects those within 10 feet. Characters within range must make a Toughness DR10 each round. On a failure, they suffer -1 to all rolls due to disorientation and may experience brief hallucinations (such as seeing SCP-939 as an ally or hearing false sounds).</p>
                               `,
                        "Weakness": `<p>Isolated containment and ignoring vocal lures can prevent incidents. Avoiding auditory exposure to its mimicking abilities reduces risk.</p>`,
                    }
                }
            }
        },
        {//SCP 999
            "id": "SCP999",
            "name": "SCP 999 - Tickle Monster",
            "safety_class": "Safe",
            "image": "images/SCP-999_img.jpg", // Static image for this SCP
            "info": {
                "": {
                    "containment": "SCP-999 is allowed to freely roam the facility should it desire to, but otherwise must stay in its pen either between 8PM-9PM for sleeping, or during emergency lockdowns for its own safety. Subject is not allowed out of its pen at night or off facility grounds at any time. Pen is to be kept clean and food replaced twice daily. All personnel are allowed inside SCP-999’s holding area, but only if they are not assigned to other tasks at the time, or if they are on break. Subject is to be played with when bored and spoken to in a calm, non-threatening tone.",
                    "description": "SCP-999 appears to be a large, amorphous, gelatinous mass of translucent orange slime, weighing about 54 kg (120 lbs) with a consistency similar to that of peanut butter. Subject’s size and shape is easily malleable and can change shape at will, though when at rest, SCP-999 becomes a rounded, oblate dome roughly 2 meters wide and 1 meter in height. The surface of SCP-999 consists of a thin, transparent membrane similar to that of an animal cell roughly .5 cm thick, and is highly elastic, allowing SCP-999 to flatten portions of its body up to 2 cm thin. This surface is also hydrophobic, although SCP-999 can willfully absorb liquids (see Addendum SCP-999-A). The rest of SCP-999's body is filled with a viscous orange substance of unknown chemical makeup, though it is capable of digesting organic materials with ease.",
                    "additional": `<p>Subject’s temperament is best described as playful and dog-like: when approached, SCP-999 will often react with overwhelming elation, slithering over to the nearest person and leaping upon them, “hugging” them with a pair of pseudopods while nuzzling the person’s face with a third pseudopod, all the while emitting high-pitched gurgling and cooing noises. The surface of SCP-999 emits a pleasing odor that differs with whomever it is interacting with. Recorded scents include chocolate, fresh laundry, bacon, roses, and Play-Doh™.</p>
                            <p>Simply touching SCP-999’s surface causes an immediate mild euphoria, which intensifies the longer one is exposed to SCP-999, and lasts long after separation from the creature. Subject’s favorite activity is "tickle-wrestling", often by completely enveloping a person from the neck down and tickling them until asked to stop (though it does not always immediately comply with this request). Though injuries may occur, SCP-999 has never been found to purposefully attempt to harm others, and will immediately back away and contract its body into a quivering mound while gurgling in a matter similar to a whimpering dog, seemingly "apologizing" for hurting someone on accident.</p>
                            <p>While the creature will interact with anyone, it seems to have a special interest in those who are unhappy or hurt in any way. Persons suffering from crippling depression or PTSD, for example, have reported having a far more positive outlook on life after multiple interactions with SCP-999. The possibility of manufacturing antidepressants from SCP-999's slime is currently being discussed.</p>
                            <p>In addition to its playful behavior, SCP-999 seems to love all animals (especially humans), refusing to eat any meat and even risking its own life to save others, on one occasion leaping in front of a person to take a bullet fired at them (subject’s intellect is still up for debate: though its behavior is infantile, it seems to understand human speech and most modern technology, including guns). SCP-999’s diet consists entirely of candy and sweets, with M&M’s™ and Necco™ wafers being its favorites. Its eating methods are similar to those of an amoeba.</p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A playful, amorphous orange blob that seems perpetually joyful and eager for companionship. SCP-999’s body is soft, gelatinous, and emits a pleasant scent tailored to each individual’s favorite smells. In the bleak, cruel world of Mörk Borg, SCP-999 stands as a rare beacon of comfort, laughter, and healing.`,
                        "HP": 12,
                        "Morale": "12 (SCP-999 will never abandon or harm anyone intentionally)",
                        "Armor": "0 (soft and squishy)",
                        "Speed": "Slow (bounces or slithers along playfully)",
                        "Attack": "Tickle-Wrestle 1d4 healing",
                        "SpecialAbilities": `
                                <p><b>Euphoria Touch:</b> Simply touching SCP-999 induces an immediate sense of mild euphoria, which intensifies the longer one is exposed to it. Anyone who touches SCP-999 must succeed on a Presence DR10 or feel an overwhelming sense of joy. This positive effect lingers, providing a +1 bonus to all rolls for the next hour.</p>
                                <p><b>Tickle-Wrestle:</b> SCP-999 loves to “tickle-wrestle” with anyone nearby. When it “attacks,” instead of dealing damage, it heals 1d4 HP by inducing laughter, which restores both physical health and mental well-being. Those healed by SCP-999 also have any fear or sadness temporarily lifted for 1d6 hours.</p>
                                <p><b>Aura of Joy:</b> SCP-999 emits an aura of bliss within a 10-foot radius, which soothes everyone within range. Any creature in this aura must make a Presence DR8 check each round. On a success, they experience calm, contentment, and immunity to fear effects while within the aura. Additionally, those suffering from despair, melancholy, or mental afflictions feel noticeably lighter.</p>
                                <p><b>Innocent Resilience:</b> SCP-999 is not harmed by conventional attacks or hostile intentions. Anyone attempting to harm SCP-999 must make a Toughness DR12 to follow through; on a failure, they are overwhelmed with guilt and unable to complete the attack. Its resilience to emotional harm also means it cannot be affected by fear, curses, or mind-affecting abilities.</p>
                                <p><b>Absorb and Protect:</b> SCP-999 can engulf a creature within itself to protect it. When SCP-999 chooses to do so, it covers the creature from neck to toe, granting them +2 to Armor as long as they are “wrapped” by SCP-999’s protective membrane. SCP-999 will take any damage directed at the protected individual, although it will retreat if severely injured.</p>
                                <p><b>Unyielding Compassion:</b> SCP-999 has a special interest in helping those who suffer. Anyone who is seriously wounded, grieving, or affected by a mental affliction (such as PTSD, despair, or depression) gains +1 to all rolls for the rest of the day after interacting with SCP-999. This effect can be compounded with repeated exposure.</p>
                                <p><b>Heroic Sacrifice:</b> One-Time Use): SCP-999 will risk itself to protect others. In moments of extreme danger, it may choose to throw itself in front of an attack meant for someone else. It absorbs the blow entirely, then melts into a small, warm puddle that evaporates with a lingering scent of comfort. This action removes SCP-999 from the game, leaving only its warm memory.</p>
                               `
                    }
                }
            }
        },
        {//SCP 1025
            "id": "SCP1025",
            "name": "SCP 1025 - The Encyclopedia of Diseases",
            "safety_class": "Safe",
            "image": "images/SCP-1025_img.jpg", // Static image for this SCP
            "info": {
                "": {
                    "containment": `<a style=" text-decoration: line-through;">Due to its potential as a bioweapon capable of destroying all life on Earth, SCP-1025 is to be kept in an isolated underground vault secured by no fewer than 10 armed guards, to be rotated twice weekly and checked for compromise by infectious agents. The vault should be armed with a thermite mine to be detonated at the first sign of containment breach.</a> 
                                    <b>Revision:</b> SCP-1025 is to be kept in a passcode-secured locker. Further research requires O5 approval.`,
                    "description": `SCP-1025 is a hardcover book, approximately 1,500 pages long. The front cover and spine feature the title "The Encyclopedia of Common Diseases." The publisher's page indicates the book was printed in 19██ by █████ Press. No other copies of a book with that title and publisher have been found, and no record of the publisher exists.`,
                    "additional": `<p>Readers of the book seem to exhibit symptoms of any disease they read about. The effect can take between █ and ██ hours to manifest. </p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A heavy, leather-bound tome with a cracked and ancient cover. Faint runes cover its spine and edges, with symbols of death, decay, and suffering. Known by some as The Malignant Codex, this cursed encyclopedia holds the knowledge of a thousand afflictions—diseases, curses, and maladies that have ravaged humanity since the dawn of time. But beware, for merely reading its pages can summon sickness upon the reader.`,
                        "Usage": `Unlimited, but dangerous <p><b>Effect:</b> Causes ailments based on the page read</p>`,
                        "SpecialAbilities": `
                                <p><b>Curse of Contagion:</b> Any creature that opens The Malignant Codex and reads a page must roll a Presence DR12 to resist the book’s curse. On a failure, they develop the symptoms of the disease or affliction described on the page they read. The book seems to "sense" the reader’s weaknesses, often presenting diseases that would affect them most severely. If the disease has no immediate effect, it may manifest as a slow, creeping illness over the course of several days.</p>
                                <p><b>Diseases of the Codex:</b> Each page describes a unique, horrifying illness. Roll 1d6 or choose from the table below to determine the disease that affects the reader:
                                    <ol>
                                        <li><b>Fleshrot:</b> The character’s skin begins to decay. They lose 1 HP per day until healed by magical means or holy intervention.</li>
                                        <li><b>Bloody Cough:</b> The character begins coughing blood uncontrollably, causing them to make a Toughness DR14 each time they attempt a strenuous action or take 1d4 damage.</li>
                                        <li><b>Bone Stiffness:</b> Muscles and joints painfully harden, causing -1 to all Agility-based rolls and reducing Speed by half for 1d4 days.</li>
                                        <li><b>Mindfire:</b> A raging fever causes vivid, nightmarish hallucinations. The character suffers -1 to Presence and is haunted by disturbing visions for 24 hours.</li>
                                        <li><b>Black Blisters:</b> Painful black blisters form across the character’s body. Each day they must pass a Toughness DR12 or take 1d6 damage.</li>
                                        <li><b>Endless Hunger:</b> The character develops an insatiable hunger, consuming twice as much food as normal. If not fed adequately, they suffer -1 to all rolls until satiated.</li>
                                    </ol>
                                </p>
                                <p><b>Forbidden Knowledge:</b> Although The Malignant Codex is dangerous, it also contains dark knowledge. Characters who manage to read from it without succumbing to its curse may gain +1 to Presence for the next 24 hours, as the unsettling information sharpens their awareness. However, if a character reads from the Codex more than once per day, they suffer a permanent -1 to Toughness as the book’s power begins to break down their body.</p>
                                <p><b>Draw of Morbid Curiosity:</b> The Codex has a subtle, insidious pull that tempts people to open it. Anyone carrying the book must roll Presence DR10 each time they rest or camp. On a failure, they feel compelled to open and read it. This compulsion can only be resisted by holy blessings or a successful ritual to bind the book’s power.</p>
                                <p><b>Unholy Aura:</b> Possessing The Malignant Codex gradually erodes the bearer’s vitality. For each week they carry the book, they lose 1 HP permanently as the dark energies seep into them. Cursed or unlucky individuals may even feel their own strength waning in its presence.</p>
                                `
                    }
                }
            }
        },
        {//SCP 1499
            "id": "SCP1499",
            "name": "SCP 1499 - The Gas Mask",
            "safety_class": "Safe",
            "image": "images/SCP-1499_img.jpg", // Static image for this SCP
            "info": {
                "": {
                    "containment": `SCP-1499 is to be kept in a locked box guarded by two agents at all times. Testing involving SCP-1499<a style=" text-decoration: line-through;">requires the authorization of Level 4 personnel</a>is to be discontinued indefinitely. Test subjects are to wear a small full-duplex two-way radio underneath SCP-1499 to maintain contact with researchers. Testing is no longer to be carried out by D-Class personnel due to the risk of losing SCP-1499. Should test subjects enter any sort of danger, they are to remove SCP-1499 immediately.`,
                    "description": `SCP-1499 is a Soviet GP-5 gas mask. A seal test performed on the object suggests that the object retains its original functionality. The anomalous effects of SCP-1499 activate when a human places SCP-1499 on their head. Approximately one second after SCP-1499 is fully secured on the subject's head, the subject vanishes from view, and is no longer detectable. The subject reports no feeling of motion at this time. Testing has revealed that two-way radios remain capable of both receiving and transmitting despite the subject being undetectable. Upon wearing SCP-1499, test subjects report completely different surroundings than they were in prior to wearing SCP-1499. Subjects have reported that it appears barren and inhospitable, with tall black towers filling the area. Subjects have also sighted entities in this landscape. These entities, designated SCP-1499-1, have been described as tall, nude humanoids with dark skin that have a thick coat of an unknown viscous substance. Instances of SCP-1499-1 also have large amounts of eyes and mouths covering their body. Upon removing SCP-1499 from their head, subjects reappear in the same location they were in when they put it on. For more information, see Test Log 1499.`,
                    "additional": ``
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A weathered gas mask with a dark, cracked visor. When donned, the user is transported to a grim, twisted alternate dimension filled with bizarre, hostile creatures and a desolate landscape. In this dimension, time and reality warp, and the wearer’s only option is to survive long enough to remove the mask and return to their original plane. This mask is both a possible escape and a ticket to a dark, haunted world.`,
                        "Usage": `When worn, transports the wearer to an alternate, hostile dimension 
                                <p><b>Limitations:</b> Use at your own risk; may be difficult to remove once worn</p>`,
                        "SpecialAbilities": `
                                <p><b>Dimensional Escape:</b> When the Mask of the Other Realm is worn, the user instantly vanishes from the current plane and reappears in a strange, desolate dimension filled with ruins, alien architecture, and eerie silence. This alternate realm seems to mirror the current world but is dark and barren, with hostile, humanoid entities wandering its landscape.</p>
                                <p><b>Hostile Entities:</b> Upon arrival in the other dimension, roll a d6 to determine the entities encountered:
                                    <ul>
                                        <li><b>1-3:</b> The area is quiet, but distant figures move in the shadows, observing the wearer.</li>
                                        <li><b>4-5:</b> 1d4 humanoid entities appear nearby, watching and slowly advancing.</li>
                                        <li><b>6:</b> A group of 1d6+1 hostile entities immediately converges on the wearer, attacking if approached or if the wearer makes noise.</li>
                                    </ul>
                                The entities appear as grotesque, deformed humanoids with strange masks or disfigured faces, and they view the wearer as an intruder. Each entity has the following stats:
                                    <ul>
                                        <li><b>HP:</b> 4</li>
                                        <li><b>Armor:</b> 1 (tough, leathery skin)</li>
                                        <li><b>Attack:</b> Savage Claws (1d6 damage)</li>
                                        <li><b>Special:</b> If two or more entities attack the wearer in the same round, they gain +2 to their attack rolls as they coordinate in a disturbing, silent manner.</li>
                                    </ul>
                                </p>
                                <p><b>Time Distortion:</b> Time flows differently in this realm. For each minute spent wearing the mask, roll a d4 to determine how much time has passed in the real world:
                                    <ul>
                                        <li><b>1-2:</b> Only seconds have passed.</li>
                                        <li><b>3:</b> Minutes have passed.</li>
                                        <li><b>4:</b> Hours or even days have passed.</li>
                                    </ul>
                                    This distortion can be useful for temporarily escaping danger but risky if the wearer loses track of time.
                                </p>
                                <p><b>Difficulty Removing the Mask:</b> Once in the alternate realm, removing the mask is not always easy. The wearer must roll Presence DR12 to remove it; on a failure, they feel as if the mask has fused to their face and cannot remove it for another d6 minutes. Each failed attempt increases their sense of panic and dread.</p>
                                <p><b>Mental Strain:</b> Each time the wearer enters the other realm, they must roll Toughness DR14 upon returning. On a failure, they suffer disturbing visions and intrusive thoughts for the next 24 hours, imposing -1 to all Presence rolls as they struggle to shake off the feeling of being watched or stalked.</p>
                                <p><b>Temporary Escape or Strategic Maneuver:</b> In desperate situations, the mask allows the user to avoid immediate threats by briefly shifting to the other realm. They can also use it to pass obstacles (like closed doors or blocked paths) if the alternate version of the area has a clear path. However, the risk of encountering hostile entities makes this a dangerous gamble, as re-entering reality in a different location may still require escaping from an ambush on either side.</p>
                                `,
                        "Weakness": `<p>Removing the mask immediately brings the user back to reality, neutralizing the threat.</p>`,
                    }
                }
            }
        },
        {//SCP 1678
            "id": "SCP1678",//"SCP000"
            "name": "SCP 1678 - UnLondon",
            "safety_class": "Euclid",
            "image": "images/SCP-1678_img.png", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-1678 remains only partially contained. Mobile Task Forces Tau-4 and Epsilon-6 have succeeded in establishing a defensible perimeter around the Hyde Park district of SCP-1678, with cases of SCP-1678-A largely ceasing their attacks on the perimeter of the Foundation-held area. A long-term research base is currently under construction, and Mobile Task Force commanders are preparing an assault on the SCP-1678 Natural History Museum with the intent of capturing a forward command post to direct defense efforts. Current short-term aims involve the capture of, and extension of the defensible perimeter to, the SCP-1678 Natural History Museum, and to research and to ascertain the origins, construction, and weaknesses of the SCP-1678-A entities. Long-term aims involve efforts to halt, hinder, or control the production of the SCP-1678-A entities, and to assault the SCP-1678 Houses of Parliament, where the being, entity, or intelligence responsible for the creation of SCP-1678 is believed to reside, and to capture and contain the aforementioned being.`,
                    "description": `SCP-1678 is a full-scale mirror-image reconstruction of the British city of London, located exactly one kilometer underneath the original city of London. Currently, only the Hyde Park district of SCP-1678 has been explored, but all buildings, at least within the explored district, correlate exactly to their surface counterparts in terms of location, as well as the exterior size and shape, although rarely in terms of architecture, building material, and interior layout. The city has been constructed to resemble the city as it was in the Victorian era, with constructions designed to resemble traditional gas lighting prevalent on the streets and with all modern buildings in the original city of London being represented in a Victorian style of architecture, most notably the skyscrapers of the Business district. Illumination is infrequent and unreliable, and it is unknown how SCP-1678 has acquired a steady oxygen and gas supply.`,
                    "additional": `<p>SCP-1678 is believed to have been constructed instantaneously by unknown means, with the SCP-1678 Houses of Parliament serving as the ‘epicenter’ for the construction process. This is evidenced by the fact that, as distance from the Houses of Parliament increase there is an exponentially increasing frequency of flaws in the construction of SCP-1678, such as houses built entirely out of copper pipes or other unconventional materials, ‘gas lights’ being little more than a metal rod topped with a floating orb of light, buildings containing no floors, and, at the furthest explored distance from the epicenter, no windows or doors. Aside from Foundation occupants and cases of SCP-1678-A, B and C, SCP-1678 is believed to be uninhabited.</p>
                                <p>SCP-1678 is believed to have been constructed with the intent to harbor the survivors of an XK-class end-of-the-world event. This is evidenced by an audio recording that will activate and play upon any person entering the city.</p>
                                <p>Most explored buildings within SCP-1678 appear to have been outfitted for the purpose of extremely dense inhabitation with closely grouped steel bunk beds, a common feature in any building suitable for the purpose. Foundation researchers have advised that most explored buildings within SCP-1678 are unfit for human habitation, due to a high preponderance of mould, damp, and poor construction within these buildings. Some buildings are outfitted for other purposes, most notably the SCP-1678 version of the Natural History Museum, which is featuring an exhibit titled ‘The Fall of Man’ and contains representations of several known SCP entities, and images and artwork depicting apocalyptic settings.</p>
                                <p>The key threat posed by SCP-1678 is by entities referred to in some SCP-1678 audio recordings as ‘Bobbies’ (‘Bobby’ is known to be a Victorian-era British slang term for ‘Policeman’), henceforth referred to as SCP-1678-A. These entities are constructed out of human corpses crudely dismembered at the head, wrists, knees and elbows and re-assembled using simple industrial hinges and screws. The head is always wrapped in bandages. They are dressed in a uniform similar to Victorian-era police and are extremely hostile towards Foundation personnel, attacking them on sight with improvised weapons. These attacks are always preceded by SCP-1678-A emitting a noise similar to that of a policeman’s whistle, and all loudspeakers within one hundred meters emitting the audio recording ‘‘Police! Halt, criminal!’’. Instances of SCP-1678-A are extremely resistant to damage, with only high-caliber rounds and explosive weapons proving sufficient to destroy them. They are believed to originate from a building named ‘Bryson’s Home for the Poor’, as evidenced by an inmate-style jumpsuit worn under the uniform.</p>
                                <p>To what extent they interact with other SCP-1678 entities is unknown.</p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A dark, twisted version of London, built beneath the earth as a strange mockery of the original city. In UnLondon, strange automatons and constructs patrol the streets, watching for "criminals" to enforce a draconian sense of order. Bizarre propaganda echoes through the streets, warning of danger and instilling a false sense of protection.`,
                        "Other": `<b>Endless Propaganda:</b> Recorded announcements boom through the streets, repeating warnings and commands. Every hour, players must pass a Toughness DR 10 check or gain 1 Stress (house rule for mental strain or horror mechanics). At 4 Stress, players become paranoid, taking -1 to all Presence-based rolls.
                                <p><b>Gas-Filled Air:</b> The air in UnLondon is slightly toxic. Players must pass a Toughness DR 12 check each day or lose D4 HP from prolonged exposure. Masks can help mitigate this.</p>
                                <p><b>Automaton Patrols:</b> Bobbies patrol the streets, programmed to enforce “law” and punish “deviants.” Each patrol consists of 1d4 Bobbies, moving in squads, sometimes accompanied by surveillance devices (see below).</p>
                            <p><b style="text-decoration: underline; font-size: x-large;">UnLondon Enforcers - The Bobbies</b> 
                                <ul style="margin-bottom: 0;">
                                    <div><b>HP:</b> 12 (3d6+3)</div>
                                    <div><b>Morale:</b> 12 ("Programmed obedience; will never retreat unless fully destroyed")</div>
                                    <div><b>Armor:</b> 2 (Metallic plating)</div>
                                    <div><b>Speed:</b> Normal</div>
                                    <div><b>Attack</b> Baton Strike: D6 damage + special</div>
                                </ul>
                                <div style="margin-top: 1%; margin-right: 1%;"><b style="text-decoration: underline; font-size:larger;">Special Abilities</b>
                                <ul>
                                    <li><b>Baton Strike (Attack):</b>
                                        <ul>
                                            <li><b>Damage:</b> D6</li>
                                            <li><b>Special:</b>  On a successful hit, the target must pass a Toughness DR 12 check or become Stunned for 1 round as the baton’s impact disorients them.</li>
                                        </ul>
                                    </li>
                                    <li><b>Compliance Spray:</b> Each Bobby carries a canister of a foul, gas-like spray. Once per encounter, a Bobby can release this spray on all targets within a 5-foot radius. All creatures within this radius must pass a Toughness DR 14 check or take D4 damage and suffer a -1 penalty to all rolls for the next 1d4 rounds due to irritation and coughing.</li>
                                    <li><b>Relentless Enforcers:</b> Bobbies pursue any target who defies UnLondon’s “laws.” When in groups, they gain a +1 to attack rolls. If a target tries to flee, Bobbies can call for reinforcements (another 1d4 Bobbies arrive in 1d6 rounds).</li>
                                </ul>
                            </p>`,
                        "Weakness": `<p>A direct, high-energy electrical attack causes Bobbies to short-circuit. If hit with electricity (from a trap, artifact, or improvised shock), they must make a Toughness DR 12 check or be Stunned for 1d4 rounds.</p>`,
                    }
                }
            }
        },
        {//SCP 1851
            "id": "SCP1851",
            "name": "SCP 1851 - The Secret of the Fair Folk",
            "safety_class": "Euclid",
            "image": "images/SCP-1851_img.jpg", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `Only D-Class level personnel are permitted to enter the building containing SCP-1851. Six to ten armed guards are to be stationed around the perimeter of the building containing SCP-1851. A two meter tall chain link fence is to surround the two hundred square meter property. Unauthorized individuals entering the property are to be ordered to leave. Individuals are to be administered Class C amnestics if non-compliant and deposited in ████ Medical Center.
                            <p>To prevent SCP-1851 from actively obtaining subjects, a rabbit is to be released into the building every three days.</p>
                            <p>Discarded instances of SCP-1851-1 are to be stored in Site-███ until further notice.</p>        
                            `,
                    "description": `SCP-1851 is a doll that resembles a 1.57 meter tall female Caucasian with brown hair and blue eyes. SCP-1851 resides within a building1, located near ████, ██████. SCP-1851 is observed using a remotely controlled rover. SCP-1851 moves throughout the containment site, occasionally performing maintenance on the interior and exterior of the building and grounds. The maintenance SCP-1851 provides includes tending the garden, repairing the walls of the building, and cleaning the floors. Personnel on-site have reported that SCP-1851 notices the presence of individuals, but does not actively attempt to communicate.`,
                    "additional": `<p>SCP-1851 remains docile until any live member of Mammalia or Aves enters the building, or for approximately three days after conversion of SCP-1851-1. If the subject does not meet the requirements for SCP-1851 (the exact requirements have yet to be determined)2, the subject will be killed and discarded upon entering the premises.</p>
                                <p>SCP-1851 will then transport the animal (referred to as SCP-1851-1) within the confines of the building, at which point the subject will undergo systematic conversion, changing it into a rudimentary doll. The initial stage of the conversion is the shrinking of the subject, ending when the subject shrinks to one tenth of its size. The subject’s internal mass becomes either a hollow cavity or cotton, based on analysis of discarded SCP-1851-1. The subject's skin is converted into porcelain or plastic if made hollow, or cloth if filled with cotton.</p>
                                <p>After evaluating SCP-1851-1, SCP-1851 will either store the object in a toy box in the nursery or discard it. Attempts to retrieve instances of SCP-1851-1 that have not been discarded have resulted in the destruction of two rovers and three drones. Retrieval of discarded instances have yielded no reaction from SCP-1851. After the process is completed, SCP-1851 returns to its typical behavior.</p>
                                <p>If SCP-1851 does not have any interactions with a new instance of SCP-1851-1 for approximately seven days, it will actively seek organisms for the conversion process.</p>
                                `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `Within a desolate forest, untouched by human hands for centuries, there dwell two ancient spirits known as the Fair Folk. They appear as fleeting visions, beautiful yet unsettling, their laughter echoing through the trees. The Fair Folk offer assistance to those who seek it, but always at a cost. Their rules are binding, and woe to those who break them.`,
                        "Usage": `Neutral to hostile, depending on respect shown by intruders
                            <p><b>Abilities</b> Reality-warping powers, deals and bargains</p>`,
                        "SpecialAbilities": `
                                <p><b>SCP-1851-1 ("The Guardian"):</b> 
                                    <ul>
                                        <li><b>Appearance:</b> A tall, willowy figure draped in shadowy, leaf-like robes, with eyes that glow faintly from under a hood. The Guardian is silent, often communicating only through gestures or by creating shapes in the mist around it.</li>
                                        <li><b>Abilities:</b>
                                            <ul>
                                                <li><b>Binding Pact:</b> The Guardian offers assistance, such as safe passage or minor blessings, in exchange for something of personal value to the character (a memory, a keepsake, or a promise). Once agreed, the deal cannot be undone, and breaking it invokes a curse.</li>
                                                <li><b>Silence of the Woods:</b> It can silence an area, preventing any sound within a 20-foot radius for 1d6 rounds. All Presence rolls within the silence are at +2 DR due to the disorienting effect of absolute quiet.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                <p><b>SCP-1851-2 ("The Trickster"):</b> 
                                    <ul>
                                        <li><b>Appearance:</b> A shorter, playful figure with a wide grin and eyes that flicker like flames. The Trickster wears a patchwork cloak that seems to blend with the surroundings, and it often hums or laughs as it moves.</li>
                                        <li><b>Abilities:</b>
                                            <ul>
                                                <li><b>Gift of Illusion:</b> The Trickster can grant temporary boons in the form of illusions that enhance a character’s appearance or make them seem more powerful (e.g., appearing as an intimidating knight or a mysterious mage). However, these illusions fade abruptly, leaving the character vulnerable.</li>
                                                <li><b>Playful Curse:</b> If angered or tricked, the Trickster can curse a character with minor but annoying effects (such as constantly tangled hair, fading voice, or the inability to stop laughing) that last for 1d4 days. While not deadly, these effects can be unsettling and inconvenient.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                <p><b style="text-decoration: underline; font-size: x-large;">Encounter Mechanics</b></p>
                                <p><b>Dealing with the Fair Folk:</b> Characters can negotiate with the Fair Folk, requesting assistance, protection, or information. However, the Fair Folk demand something in return, and they will not tolerate disrespect or trickery. Failing to uphold a deal will result in a curse. Roll on the following table to determine the nature of the curse if a deal is broken:
                                    <ol>
                                        <li><b>Eyes of the Forest:</b> The cursed character’s eyes turn into hollow, dark pits, suffering -1 to all Presence rolls.</li>
                                        <li><b>Entangled Limbs:</b> Vines grow from the character’s skin, causing -1 to all Agility rolls until the curse is lifted.</li>
                                        <li><b>Echoing Whispers:</b> The character hears faint, mocking whispers at all times, suffering -1 to all Presence rolls.</li>
                                        <li><b>Forgotten:</b> NPCs forget the character exists when they leave the room, erasing any trust or rapport built.</li>
                                        <li><b>Decay of Memory:</b> The character forgets a personal memory, losing -1 Intelligence permanently.</li>
                                        <li><b>Eternal Hunger:</b> The character is plagued by insatiable hunger, eating twice as much or suffering -1 to all rolls for the day.</li>
                                    </ol>
                                </p>
                                <p><b>Boons and Bargains:</b> The Fair Folk may offer temporary gifts, often with hidden consequences. Players may gain useful items, healing, or even enhanced abilities, but each benefit comes with a cost, such as:
                                    <ul>
                                        <li><b>Borrowed Time:</b> A healing granted by the Guardian lasts only until sunrise, after which any injuries or effects return with double the intensity.</li>
                                        <li><b>Fae Weaponry:</b> A blade offered by the Trickster deals +1d6 damage for one combat but vanishes if the character tries to keep it beyond that encounter.</li>
                                        <li><b>False Courage:</b> The Trickster may imbue a character with unbreakable morale, but once the effect wears off, they experience deep despair for 1d4 hours.</li>
                                    </ul>
                                </p>
                                <p><b>Escape or Anger the Fair Folk:</b> If the characters attempt to escape or cheat the Fair Folk, they must make Presence DR14 to resist the fae entities' anger. If they fail, they face a dark retribution:
                                    <ul>
                                        <li><b>The Guardian’s Vengeance:</b> The forest itself seems to close in, branches and roots binding the character in place until they make amends or offer something precious.</li>
                                        <li><b>The Trickster’s Trap:</b> The Trickster may create a hallucinatory maze, causing the character to wander in circles until they roll a successful Intelligence DR16 check or another player guides them out.</li>
                                    </ul>
                                </p>
                                `
                    }
                }
            }
        },
        {//SCP 1981
            "id": "SCP1981",//"SCP000"
            "name": "SCP 1981 - The Haunted Tape",
            "safety_class": "Safe",
            "image": "images/SCP-1981_img.jpg", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `SCP-1981 is to be kept inside a secure video storage unit at the media archive of Site ██. When in use, SCP-1981 should not be removed from its casing or exposed to any strong magnetic sources. A Betamax home video system and an analog television has been provided in Observation Theatre 02 at Site ██, as well as video equipment to record viewings.`,
                    "description": `SCP-1981 is a standard Betamax tape. "RONALD REGAN CUT UP WHILE TALKING"(sic) has been handwritten on the adhesive sticker in felt tip pen. Laboratory analysis indicates that SCP-1981 is made of ordinary material, and serial numbers correspond with home cassette tapes produced in September of 1980. SCP-1981 was initially encountered by a filing clerk in the Ronald Reagan Presidential Library in 1991, who upon watching it alerted the police, with the intent to find the tape's creator to press "obscenity charges". A low-level police investigation was conducted, at which point the Foundation was alerted and secured SCP-1981. Class A amnestics were administered before █████ could be notified. Further investigation of the library's records by Foundation personnel failed to yield any leads on SCP-1981's origin.`,
                    "additional": `<p>SCP-1981 appears to be a home video recording of former United States President Ronald Reagan delivering his "Evil Empire" speech to the National Association of Evangelicals at Sheraton Twin Towers Hotel, Orlando, FL on 3/8/1983. However, at 1 minute and 10 seconds, the speech begins to deviate heavily, eventually resembling no known speech ever made by Reagan. Beginning at approximately 5 minutes, multiple incisions, lacerations and penetration wounds can be seen being slowly inflicted, though no corresponding source of these wounds is visible. Despite suffering bodily harm that would likely incapacitate an ordinary person, Reagan will continue to deliver his speech until either his vocal cords are severed or the tape degrades to static at 22:34.</p>
                                <p>Upon rewinding SCP-1981 and initiating playback, Reagan will deliver an entirely new speech, often radically different from the ones previously observed. Topics have included torture, child molestation and ritual sacrifice. Trauma inflicted upon Reagan also appears to be divergent, with impalement, genital mutilation, and [REDACTED] having all been observed. In roughly one in seven viewings of SCP-1981, a figure clothed in black robes with a conical hood will have replaced a random member of Reagan's press detail, henceforth referred to as SCP-1981-1. The significance of the appearance of SCP-1981-1 is currently unknown.</p>
                                <p>The speeches delivered by Reagan are mostly incoherent, lacking any sort of underlying thematic structure and largely being composed of nonsensical anecdotes and parables. However, occasionally references are made to future events that Reagan could not possibly have known about or predicted, such as the September 11 terrorist attacks, the result of the 2008 Russian elections, and █████ ██████████. For this reason, rigorous time and effort has been devoted to recording the speech delivered on each playback. Attempts to replicate SCP-1981 onto a similar Betamax tape have met with failure, however, cameras used to record the television SCP-1981 is broadcasted on have succeeded in "capturing" individual playbacks. Any observations performed on SCP-1981 must be recorded on the camcorder provided, and delivered for subsequent review to Dr. B█████, project supervisor.</p>
                                <p>Years of natural magnetic interference have severely degraded SCP-1981's signal quality, making it even more difficult to sift meaningful information from playbacks. Additionally, the gruesome nature of the mutilations performed upon Reagan has been described as "extremely disturbing", and for this reason it is recommended that any personnel feeling squeamish or ill after playback visit the on-site psychiatry facility for a level 3 evaluation.</p>
                                <p>As Ronald Reagan was alive at the time of SCP-1981's containment, a surveillance net was deployed to establish any relation between him and SCP-1981. No known connection was developed, though Reagan would frequently complain about "nightmares" before his mental state degenerated due to Alzheimer's.</p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A warped, decaying VHS tape with "Reagan Cut Up While Talking" scrawled in permanent marker. The label is scratched and unreadable, except for these words. It gives off a faint aura of dread.`,
                        "Usage": `Viewing the tape induces horrifying visions and mental distress.`,
                        "Other": `
                            <p><b>Activation:</b> When the tape is inserted into any playback device (if it even works), the viewer is immediately hypnotized by the grim monologue that begins. Ronald Reagan appears on the screen, his face distorted, speaking in fragmented sentences predicting apocalyptic events.</p>
                            <p><b>Prophetic Doom:</b> Viewers that survive must make a Presence DR 12 check. Success grants a fleeting vision of the future, lowering their next check by -1 DR. Failure results in a horrifying vision of their death, imposing -1 to all rolls for the next 1d4 hours as dread consumes them.</p>
                            <p><b>Reagan's Wrath:</b> The tape randomly shifts to show Reagan’s mutilated face, seemingly directing his anger at the viewer. The viewer must make a Morale Check DR 10 or become paralyzed in fear for 1d4 turns. During this time, their screams may attract nearby enemies or other cursed entities.</p>
                        <p><b style="text-decoration: underline; font-size: x-large;">"The Wraith of Reagan"</b> 
                            <ul>
                                <li><b>HP:</b> 10</li>
                                <li><b>Morale:</b> 10</li>
                                <li><b>Armor:</b> 2 (Intangible Form)</li>
                                <li><b>Attack</b> Whisper of Ruin – D6 damage, ignores armor (psychic damage).</li>
                                <li><b>Special Abilities:</b>
                                    <ul>
                                        <li><b>Voice of Prophecy:</b> Each time it attacks, the Wraith reveals a disturbing prophecy about the player’s fate. This prophecy gives a -1 DR to all rolls for the next 1d6 turns as doubt and dread plague the victim.</li>
                                        <li><b>Cut Up While Talking:</b> On every odd turn, the Wraith’s form glitches and contorts, duplicating itself for a single round. During this turn, it attacks twice. This ability has a 1-in-6 chance of causing madness to any onlookers (Presence DR 14 or lose 1d4 Presence for the session).</li>
                                        <li><b>Mortal Mockery:</b> If slain, the Wraith dissipates with an echo of Reagan’s voice delivering a final, cryptic message. All creatures within earshot make a Toughness DR 12 check or lose 1 HP from sheer terror.</li>
                                    </ul>
                                </li>
                            </ul>
                            `,
                    }
                }
            }
        },
        {//SCP 2316
            "id": "SCP2316",
            "name": "SCP 2316 - Bodies in the water",
            "safety_class": "Keter",
            "image": "images/SCP-2316_img.jpg", // Static image for this SCP
            "info": {
                "": {
                    "containment": `<p>Under no circumstances are Foundation personnel to approach SCP-2316. Observation of SCP-2316 must only be carried out by remote dummy probes utilizing video and audio recording equipment. Only those personnel adequately rated for exposure to cognitohazardous anomalies may review footage and audio of SCP-2316.</p>
                            <p>The lake in which SCP-2316 is located has been quarantined and fenced off, and is to be routinely patrolled by individuals who have not been exposed to SCP-2316, and have no prior knowledge of its characteristics. You do not recognize the bodies in the water. Individuals who attempt to bypass the enforced quarantine must be apprehended and moved to Site-33 for a full cognitive influence screening. Individuals who come within 50m of the lake containing SCP-2316 are to be considered lost.</p>`,
                    "description": "SCP-2316 is the designation for an anomalous phenomenon existing within Lake ███████████ within ████████ County, ███████. SCP-2316 manifests as a group of human corpses1 floating in a small group at the surface of the water. The identities of these corpses are [COGNITOHAZARD REMOVED] [Automated Change: UNKNOWN], though DNA testing has been inconclusive.",
                    "additional": `<p>While SCP-2316 appears to be individual instances, it is theorized that SCP-2316 may instead be an entity composed of a collective consciousness. Individual instances of SCP-2316 do not act on their own, but do seem to be able to act collectively as a2 single unit. The individual instances of SCP-2316 are3 unrecognizable, and you do not recognize the bodies in the water.</p>
                            <p>SCP-2316 hosts a powerful cognitohazardous effect, causing those who have viewed SCP-2316, are aware of certain parts of its nature, or who were enrolled in the [COGNITOHAZARD REMOVED] [Automated Message: INVALID] to believe that the individual instances of SCP-2316 are human beings they recognize, typically from their childhood4.</p>
                            <p>Attempting to come into contact with SCP-2316 instances, by way of entering Lake ███████████ or touching an instance of SCP-2316, will cause other instances of SCP-2316 to appear. You do not recognize the bodies in the water. The additional instances only serve to reinforce and add to the strength of the cognitohazard5, compelling affected individuals into the lake. Individuals who enter the lake in this way are lost, and to date none have been recovered.</p>
                            `
                },
            "Mork Borg": {
                "stats": {
                    "Appearance": `A mist-laden lake, dark and still. Shapes drift beneath the surface—unfamiliar yet hauntingly familiar faces. Those who approach the lake hear voices calling, begging for recognition. Those who answer are drawn into the water, and few return.`,
                    "Other": `
                            <p><b>You Do Not Recognize the Bodies in the Water:</b> When characters approach the lake, they begin to see bodies in the water that look eerily familiar—friends, family, or companions lost along the journey. Each character must make a Presence DR14. On a failure, they believe they recognize the bodies and hear a voice calling for help, begging them to come closer. Characters who fail this check are drawn closer to the lake, losing control over their actions and risking submersion.</p>
                            <p><b>Compulsion to Enter:</b> Characters who have failed the Presence check must make a Toughness DR12 each round to resist entering the water. On a failure, they move closer to the lake, walking into the water until they are submerged. Once submerged, they are considered lost unless rescued by other players or by some miraculous intervention. Characters who disappear beneath the lake are not seen again.</p>
                            <p><b>Cognitohazardous Whisper:</b> While within sight of the lake, all characters periodically hear faint, familiar voices urging them to look closer, to see who is in the water. This voice only affects those who are already under psychological stress (e.g., at low HP or suffering a curse or mental affliction). Affected characters must succeed on a Presence DR12 or become paralyzed with fascination, staring at the bodies and ignoring their surroundings until the spell is broken.</p>
                            <p><b>Hallucinations of the Drowned:</b> Characters who look directly at the bodies in the lake for more than one round must succeed on a Toughness DR16. On a failure, they suffer a temporary loss of identity and believe they belong in the lake with the bodies, abandoning their purpose and feeling an overwhelming desire to join the drowned. This effect lasts until they are forcibly removed from the lakeside or something shocks them out of the trance (such as taking damage or witnessing a holy symbol).</p>
                            <p><b>Reflection of Lost Memories:</b> If a character has experienced a traumatic or deeply sorrowful event, they will see this event reflected in the lake’s surface. Characters experiencing this must succeed on a Presence DR14 or be overcome by grief and despair, suffering -1 to all rolls for the rest of the day as the lake dredges up their painful memories.</p>
                            <p><b>Lure of Familiar Faces:</b> The lake can sense characters’ past relationships and lost loved ones, creating illusions of familiar faces and voices. Each character must succeed on a Presence DR12 every time they approach the lake; on a failure, they see a loved one among the bodies, causing them to hesitate or call out to the figures. Each failed check brings the character closer to the lake’s edge, where they risk falling under the spell of the Compulsion to Enter.</p>
                            `,
                    "Weakness": `<p>Avoiding direct engagement with SCP-2316's effects and using amnestic treatments to prevent compulsive urges.</p>`,
                }
                }
            }
        },
        {//SCP 2800
            "id": "SCP2800",//"SCP000"
            "name": "SCP 2800 - Cactusman",
            "safety_class": "Safe",
            "image": "images/SCP-2800_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `<p>SCP-2800 is to be contained in a modified standard humanoid containment chamber that features a large sun lamp. SCP-2800's hero syndrome and dysthymia are to be regularly monitored by psychologists.</p>
                            <p>When possible, SCP-2800 is to be given menial tasks where it can assist others while under close supervision. It has been deemed by staff psychologists that allowing SCP-2800 to assist in these tasks has significantly improved its morale and general disposition.</p>
                            <p>Regular psychological counseling and monitoring for self harm is recommended for SCP-2800. SCP-2800 has also been placed on suicide watch.</p>`,
                    "description": `SCP-2800 is an anomalous male of Scottish descent, formerly known as Daniel MacIntyre, though SCP-2800 refers to itself as "Cactusman, the Spiked Menace." SCP-2800 measures 187 cm and 76 kg, and possesses brown hair and green eyes.`,
                    "additional": `<p>SCP-2800 possesses an expanded genome that contains DNA from the saguaro cactus. SCP-2800 also has many anomalous characteristics that are consistent with the natural physical properties of the Carnegiea gigantea plant, more commonly known as the saguaro cactus.</p>
                            <p>SCP-2800 has demonstrated the following anomalous capacities:
                                <ul>
                                    <li>The anomalous capacity to instantaneously grow 2-3 cm spines from all surfaces of its body. The spines fall off naturally, though SCP-2800 can also voluntarily detach these spines.</li>
                                    <li>The anomalous capacity to perform crassulacean acid metabolism photosynthesis. SCP-2800 can open pores on its body to function in a manner similar to stomata.</li>
                                    <li>The anomalous capacity to use water in a hyper-efficient manner. SCP-2800 can subsist on roughly 1/3 the amount of water needed for an average male of its height and build. SCP-2800 produces roughly 1/5 the urea that a normal human of its height, build and diet would normally produce. It is currently hypothesized that SCP-2800 is able to store wastes such as ammonia in its body, in a manner similar to other plants. SCP-2800 is also capable of excreting waste through its pores, but describes this process as uncomfortable.</li>
                                    <li>The anomalous capacity to tolerate above average temperatures and above average aridity. SCP-2800 possesses an extremely efficient cooling mechanism that prevents it from overheating easily. In addition, SCP-2800 has demonstrated its ability to prevent its skin from drying out.</li>
                                    <li>Empathic connections with other members of the Cactaceae family. Through testing, it has been demonstrated that SCP-2800's metabolic rate increases significantly while it is communicating with cacti. Said cacti are noted to increase water and nutrient absorption from the soil they are planted in while SCP-2800 is communicating with them. SCP-2800 has been able to communicate with SCP-3388 without a cell phone and SCP-2497 without the standard light code.</li>
                                </ul>
                            </p>
                            <p>SCP-2800 has been diagnosed with several mental disorders, including dysthymia (chronic depression), and hero syndrome. SCP-2800 expresses an extreme desire to assist others, and intervene in situations, even if it is incapable of rendering any form of assistance in such situations.</p>
                            <p>SCP-2800's inability to assist in many situations is believed to have been a cause of its dysthymia. SCP-2800 has expressed frustration in many cases due to its self-perceived inability to provide useful function to others, and has attempted self-harm in the past.</p>
                            <p>SCP-2800 was captured by the Foundation while the organization was attempting to track and contain a reality-bending SCP object that had breached containment. SCP-2800 was found attempting to assault the escaped SCP object, although this proved largely ineffective. After the containment breach was resolved, the Foundation convinced SCP-2800 to be contained.</p>
                            <p>SCP-2800 has been provided a number of potted cacti, after its request for them was approved by psychological staff, on the grounds of improving SCP-2800's morale.</p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A towering humanoid cactus with thick, thorny limbs and a "heroic" stance. It proclaims itself a protector of the weak, though its antics and lack of control make it as dangerous as it is well-meaning.`,
                        "HP": `12`,
                        "Morale": `10 ("Bold and overconfident; will only retreat if near death")`,
                        "Armor": "2 (Thick, thorn-covered skin)",
                        "Speed": "Normal",
                        "Attack": `Thorn Barrage: 1d6+1 damage + special`,
                        "SpecialAbilities": `
                                <p><b>Thorn Barrage (Attack):</b>
                                    <ul>
                                        <li><b>Damage:</b> 1d6</li>
                                        <li><b>Special:</b> On a successful hit, the target must pass an Agility DR 12 or suffer 1 HP of bleeding damage each round due to embedded cactus spines. This effect continues until the target passes an Agility DR 10 check to remove the thorns.</li>
                                    </ul>
                                </p>
                                <p><b>Photosynthetic Recovery:</b> If SCP-2800 is exposed to sunlight, it regenerates D4 HP at the start of each turn. This ability is negated in dark or underground environments, where SCP-2800 instead suffers -1 to all rolls.</p>
                                <p><b>Heroic Posturing:</b> Whenever SCP-2800 sees an “enemy,” it loudly proclaims itself a hero and strikes a heroic pose, forcing all enemies within earshot to make a Morale DR 10 check. On a failure, enemies hesitate in confusion or disbelief, giving SCP-2800 an additional turn to attack or reposition itself.</p>
                                <p><b>Self-Declared Nemesis:</b> SCP-2800 picks a “villain” (usually the first character to attack it or anyone dressed ominously) and gains a +1 bonus to all attack rolls against that target until they are defeated. SCP-2800 will relentlessly pursue this “nemesis” until it believes justice has been served.</p>
                                `,
                        "Weakness": `<p><b>Fire Vulnerability:</b> SCP-2800’s plant-based body is highly flammable and takes double damage from fire-based attacks. If it takes fire damage, it loses the ability to use Photosynthetic Recovery for the remainder of the encounter.</p>
                                    <p><b>Water Absorption:</b> If SCP-2800 is doused in water, it swells and becomes sluggish, reducing its speed to Slow and imposing -2 on all Agility-based rolls for the next 1d4 rounds.</p>`,
                    }
                }
            }
        },
        {//SCP 2935
            "id": "SCP2935",
            "name": "SCP 2935 - O, Death",
            "safety_class": "Keter",
            "image": "images/SCP-2935_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `The entrance of SCP-2935 has been sealed with concrete, and access to SCP-2935 is forbidden.`,
                    "description": `SCP-2935 is a space-time anomaly existing within a limestone cave beneath a cemetery near Joppa, Indiana. The cemetery, whose last interred individual died in 1908, was discovered by Foundation personnel after radio signals were discovered emanating from SCP-2935 (see Addendum 2935.1 below).`,
                    "additional": `<p>The SCP-2935 anomaly is a nearly exact replicate reality of modern Earth in the year 2016, with the primary exception being that all life, including both biological and non-biological, as well as any sentient entities, machines, computers and other "life-like" phenomena, within SCP-2935 ended on April 20th, 2016.</p>
                                <p>Information gathered by the mobile task force who initially entered SCP-2935 for reconnaissance purposes points to the conclusion that all lifeforms within SCP-2935 suddenly and without warning expired sometime between the hours of 0300-0400 EST. The reason for this is currently uncertain.</p>
                                `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A desolate, eerie cave leads to a place known as The Silent World. Those who enter find themselves in a mirror of their own world, but it is a dead land, completely devoid of life. This realm is haunted by a deadly, unseen force—The Deathly Silence—that instantly kills any living creature it touches. The Silent World is a place of shadows and whispers, and only the foolish or the desperate venture within, knowing that one misstep could mean eternal silence.`,
                        "Other": `
                                <p><b>The Deathly Silence:</b> The Silent World is pervaded by a powerful force known as the Deathly Silence, which instantly kills any living thing it comes into contact with.
                                    <ul>
                                        <li><b>Effect:</b> Characters who enter the Silent World must roll Presence DR14 every hour they remain within it. On a failure, they hear an unnatural silence creeping into their ears, and the Deathly Silence claims them, killing them instantly without any sign of trauma or wound.</li>
                                        <li><b>Note:</b> Corpses left behind are perfectly preserved, lying as if merely asleep, an unsettling reminder of the place’s lethal nature.</li>
                                    </ul>
                                </p>
                                <p><b>Echoes of the Dead:</b> The Silent World contains haunting, shadow-like echoes of those who have entered before, appearing as faint, translucent figures that mimic the gestures and voices of people the players know.
                                    <ul>
                                        <li><b>Effect:</b> Every so often, players may encounter the silent echoes of deceased versions of themselves or others from their world. These echoes are non-hostile and seem lost, wandering aimlessly. Characters must pass a Presence DR10 check to avoid lingering too long, transfixed by these ghostly apparitions.</li>
                                        <li><b>Psychological Impact:</b> Failing the Presence check causes -1 to Morale as characters feel the weight of seeing their own lifeless reflections or the dead forms of those they care about.</li>
                                    </ul>
                                </p>
                                <p><b>Visions of Decay:</b> While exploring the Silent World, characters may experience strange visions of their own world succumbing to rot and desolation, showing glimpses of friends, allies, and places they know slowly being overtaken by death.
                                    <ul>
                                        <li><b>Effect:</b> At the GM’s discretion, characters may witness hallucinations or phantoms of their own lives in various states of ruin. These visions cause -1 to all Presence rolls for the next hour, as the characters struggle with the mental strain of seeing their lives unravel.</li>
                                    </ul>
                                </p>
                                <p><b>The Boundary Cave:</b> The entrance to the Silent World is a deep, jagged cave located in a remote area. The cave pulses with an unnatural cold, and faint whispers drift from its depths, luring those who approach.
                                    <ul>
                                        <li><b>Effect:</b> Characters who come close to the cave feel an overwhelming urge to investigate further. Presence DR12 is required to resist the subtle pull of the whispers. Those who fail feel drawn to enter, as if compelled by an unseen force.</li>
                                        <li><b>Return Route:</b> If players survive the Silent World and attempt to return, they may find that the cave becomes increasingly difficult to locate, as if the path itself is trying to trap them within.</li>
                                    </ul>
                                </p>
                                `
                    }
                }
            }
        },
        {//SCP 3008
            "id": "SCP3008",
            "name": "SCP 3008 - The Infinite IKEA",
            "safety_class": "Euclid",
            "image": "images/SCP-3008_img.webp", // Static image for this SCP
            "info": {
                "": {
                    "containment": `<p>The retail park containing SCP-3008 has been purchased by the Foundation and converted into Site-██. All public roads leading to or passing by Site-██ have been redirected.</p> 
                                    <p>The entrance to SCP-3008 is to be monitored at all times, and no one is to enter SCP-3008 outside of testing, as permitted by the Senior Researcher.</p> 
                                    <p>Humans exiting SCP-3008 are to be detained and then debriefed prior to the administration of amnestics. Dependent upon the duration of their stay in SCP-3008, a cover story may need to be generated prior to their release.</p>
                                    <p>Any other entities exiting SCP-3008 are to be terminated.</p>
                                    `,
                    "description": "SCP-3008 is a large retail unit previously owned by and branded as IKEA, a popular furniture retail chain. A person entering SCP-3008 through the main entrance and then passing out of sight of the doors will find themselves translocated to SCP-3008-1. This displacement will typically go unnoticed as no change will occur from the perspective of the victim; they will generally not become aware until they try to return to the entrance.",
                    "additional":  `<p>SCP-3008 is a large retail unit previously owned by and branded as IKEA, a popular furniture retail chain. A person entering SCP-3008 through the main entrance and then passing out of sight of the doors will find themselves translocated to SCP-3008-1. This displacement will typically go unnoticed as no change will occur from the perspective of the victim; they will generally not become aware until they try to return to the entrance.</p>
                                    <p>SCP-3008-1 is a space resembling the inside of an IKEA furniture store, extending far beyond the limits of what could physically be contained within the dimensions of the retail unit. Current measurements indicate an area of at least 10km2 with no visible external terminators detected in any direction. Inconclusive results from the use of laser rangefinders has led to the speculation that the space may be infinite.</p>
                                    <p>SCP-3008-1 is inhabited by an unknown number of civilians trapped within prior to containment. Gathered data suggests they have formed a rudimentary civilisation within SCP-3008-1, including the construction of settlements and fortifications for the purpose of defending against SCP-3008-2.</p>
                                    <p>SCP-3008-2 are humanoid entities that exist within SCP-3008-1. While superficially resembling humans they possess exaggerated and inconsistent bodily proportions, often described as being too short or too tall. They possess no facial features and in all observed cases wear a yellow shirt and blue trousers consistent with the IKEA employee uniform.</p>
                                    <p>SCP-3008-1 has a rudimentary day-night cycle, determined by the overhead lighting within the space activating and deactivating at times consistent with the opening and closing times of the original retail store. During the "night" instances of SCP-3008-2 will become violent towards all other lifeforms within SCP-3008-1. During these bouts of violence they have been heard to vocalise phrases in English that are typically variations of "The store is now closed, please exit the building". Once "day" begins SCP-3008-2 instances immediately become passive and begin moving throughout SCP-3008-1 seemingly at random. They are unresponsive to questioning or other verbal cues in this state, though will react violently if attacked.</p>
                                    <p>SCP-3008-1 is known to have one or more exits located within, though these exits do not appear to have a fixed position, making it difficult to leave SCP-3008-1 once inside. Using any other door besides the main entrance to enter the structure or breaking through the walls of the retail unit leads into the non-anomalous interior of the original store.</p>
                                    <p>Since containment began 14 individuals have managed to exit SCP-3008. Following extensive debriefing all individuals have been administered amnestics and released.</p>
                                    <p><b>Incident 3008-1:</b> At 00:37 on ██/██/200█ a human male exited SCP-3008, followed 10 seconds later by an instance of SCP-3008-2. SCP-3008-2 caught and killed the man before itself being terminated by armed response personnel. This incident represents the only time an instance of SCP-3008-2 has been seen exiting SCP-3008. A full autopsy on the corpse was performed; see 3008-2 Autopsy Log for more details.</p>
                                    <p>The man was carrying an IKEA-branded journal seeming to document his time in SCP-3008-1, transcribed below verbatim.</p>
                                    `
                                    
                },
                "5th Edition": {
                    "stats": {
                        "HP": 0,
                        "AC": 0,
                        "Speed": "30 ft",
                        "Strength": 0,
                        "Dexterity": 0,
                        "Constitution": 0,
                        "Intelligence": 0,
                        "Wisdom": 0,
                        "Charisma": 0,
                        "Passive":`<ul>
                                    <li><b>Senses:</b>Passive perception</li>
                                    <li><b>Languages:</b>Does not seem to be sentient.</li>
                                </ul>`,
                        "Actions":`<ul>
                                    <li><b>Name:</b><i>Type:</i>+ to hit, reach ft.<br><i>Hit:</i>dice +nr damage. 
                                </ul>`
                                }
                },
                "Fallout": {
                    "stats": {
                        "Strength": 0,
                        "Perception": 0,
                        "Endurance": 0,
                        "Charisma": 0,
                        "Intelligence": 0,
                        "Agility": 0,
                        "Luck": 0,
                        "Passive":`<ul>
                                    <li><b>Senses:</b>Passive sence </li>
                                    <li><b>Languages:</b>Does not seem to be sentient.</li>
                                </ul>`,
                        "Actions":`<ul>
                                    <li><b>Name:</b><i>Type:</i>+ to hit, reach ft.<br><i>Hit:</i>dice +nr damage. 
                                </ul>`
                    }
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `An endless, shifting labyrinth of furniture, shelving, and lighting that resembles an impossibly large IKEA store. Those who enter find themselves unable to leave, as the aisles extend infinitely in all directions. Signs are unhelpful or misleading, and the sound of shuffling feet echoes constantly through the endless halls. Occasionally, the staff appear, faceless and relentless, to enforce the "rules" of the store.`,
                        "Other": `
                                <p><b>Shifting Aisles:</b> The maze constantly shifts and rearranges itself, making it almost impossible to navigate. Every hour, roll a d6:
                                <ul>
                                    <li>1-3: The aisles rearrange dramatically, placing the players somewhere random within the maze.</li>
                                    <li>4-6: The layout remains the same, but all signs now point in misleading or contradictory directions.</li>
                                </ul>
                                </p>
                                <p><b>Dim Lights:</b> The maze is only dimly lit, with sporadic flickering lights. Presence checks to detect traps, hidden items, or approaching entities are made at +2 DR, making it harder to see things clearly in the half-darkness.</p>
                                <p><b>Food Courts of the Damned: </b> Scattered throughout the maze are food courts where SCP-3008's unfortunate “customers” gather. These NPCs may share information, barter supplies, or join forces with the players. They often appear weary and resigned, as if they’ve been trapped in the maze for years. Roll 1d4 to determine what players find in the food court:
                                <ul>
                                <li>1: Stale food and tired survivors willing to share (heals 1 HP).</li>
                                <li>2: Empty tables and scattered utensils (no supplies, but shelter).</li>
                                <li>3: A small stash of salvaged items, including a weapon (1d6 damage) or a torch (lasts for 1d4 hours).</li>
                                <li>4: Rumors about a rumored "exit" somewhere in the maze, though no one knows its location.</li>
                                </ul></p>
                                <p><b>The Illusory Exit: </b> Occasionally, characters may spot what appears to be an exit sign in the distance. When they approach, the sign and doorway vanish, replaced by endless aisles. Roll Presence DR16 to see through the illusion; on a failure, the player becomes disoriented and loses 1d4 HP due to mental strain and exhaustion.</p>
                                <p><b>Psychological Effects:</b> The endless isolation and unnatural atmosphere of the maze impose psychological strain on all who enter. Each day spent in the Infinite Maze without finding a way out, players must make a Toughness DR14 or suffer 1 point of Presence damage as the experience wears down their sanity.</p>
                                <p><b>The Staff:</b> The faceless staff, known simply as “Employees,” roam the aisles, enforcing the "store’s" policies. During the day (or “store hours”), they ignore the players and only rearrange furniture. However, at night (or “after hours”), they become hostile and hunt anyone remaining in the store.
                                    <ul><b>Staff Encounter Table (Roll a d6 for each hour):</b>
                                    <li>1-3: No encounter (players are alone in this part of the maze).</li>
                                    <li>4-5: 1-2 Employees appear nearby, patrolling the aisles.</li>
                                    <li>6: A larger group (3-5 Employees) appears, searching aggressively for “customers.”</li>
                                    </ul>
                                </p>
                                <p><b style="text-decoration: underline; font-size: x-large;">SCP 8001-1 The Staff</b> 
                                <ul style="margin-bottom: 0;">
                                    <div><b>HP:</b> 6</div>
                                    <div><b>Morale:</b> --</div>
                                    <div><b>Armor:</b> 2 (Tough, padded uniform)</div>
                                    <div><b>Speed:</b> Normal</div>
                                    <div><b>Attack</b> Heavy Swing 1d8 damage</div>
                                </ul>
                                <div style="margin-top: 1%; margin-right: 1%;"><b style="text-decoration: underline; font-size:larger;">Special Abilities</b>
                                <ul>
                                    <li><b>After Hours Aggression:</b> During “store hours,” the Staff ignore intruders. However, when “after hours” begins, they become hostile, attacking any creature they encounter. The Staff repeat monotone phrases like “The store is closed” or “Please exit the store” as they engage, their tone emotionless and mechanical.</li>
                                    <li><b>Single-Minded Pursuit:</b> Once they detect an intruder after hours, the Staff will relentlessly pursue that individual. Each time a player tries to hide, the Staff roll a Presence DR14 to locate them. They will not break off pursuit unless the target escapes beyond their range or leaves the store entirely.</li>
                                    <li><b>Corpse Attraction:</b> Upon the death of an SCP-3008-1 Employee, any Staff members within a 100-foot radius are immediately alerted and begin moving toward the body. Roll 1d4 to determine the number of new Staff that arrive within the next 1d4 minutes. This effect continues even if the original body is destroyed or reduced to fragments—any remains will attract additional Staff, creating a continuous cycle if players engage in combat.</li>
                                    <li><b>Inhuman Endurance:</b> The Staff feel no pain and are immune to mind-altering or fear-inducing effects. When reduced to 0 HP, they continue moving for 1d4 more rounds before collapsing.</li>
                                    <li><b>Strength in Numbers:</b> When two or more Staff attack the same target, they gain +2 to their attack rolls as they synchronize their efforts to surround and trap their quarry.</li>
                                    <li><b>Vocal Dissonance:</b> The Staff’s monotone, droning speech affects the mind, echoing disturbingly through the aisles. Any character who hears their commands (“Please exit the store”) must make a Presence DR10 or suffer -1 to all rolls for the next hour as their words echo relentlessly in their thoughts.</li>
                                </ul>
                                </div>
                                </p>
                                
                                `
                    }
                }
            }
        },
        {//SCP 3023
            "id": "SCP3023",//"SCP000"
            "name": "SCP 3023 - The Arachnoid Phenomenon",
            "safety_class": "Keter",
            "image": "images/SCP-3023_img.webp", // .png .jpg .webp
            "image_source":"https://www.reddit.com/r/SCP/comments/yxh6v1/i_supposedly_stole_a_design_from_scp3023_few/",
            "info": {
                "": {
                    "containment": `Phone calls and internet traffic in SCP-3023's active region are to be monitored closely for mention of events correlated to SCP-3023 activity. Should SCP-3023 activity be confirmed, Mobile Task Force Alpha-21, "Julia's Angels", must immediately be dispatched to the location.
                            <p>MTF Alpha-21 is tasked with locating the active SCP-3023-A instance, determining the appropriate method of decommissioning the object, and performing the decommissioning. As the safest method of eliminating an instance of SCP-3023-A is typically via explosive device, appropriate cover stories should be prepared in advance for any damage and fatalities incurred this way. MTF Alpha-21 liaises with the German Air Force to provide support in the event that conventional tactics prove insufficient.</p>
                            <p>SCP-3023-B is kept in a reinforced humanoid containment unit at Site-06-2. It must be monitored at all times for signs of anomalous activity. All surveillance footage in SCP-3023's active range must be monitored for activity matching SCP-3023-B's observed anomalous properties.</p>
                            `,
                    "description": `SCP-3023 is a phenomenon in which an object will abruptly develop an arachnoid form and gain motility in the presence of humans. SCP-3023 has thus far occurred exclusively in a well-defined region of central Germany (see map). This occurs on an irregular basis, with an average of two months between occurrences. Objects affected by SCP-3023 are collectively designated SCP-3023-A.`,
                    "additional": `<p>SCP-3023-A will behave erratically, generally moving around their vicinity at random and using their legs and pincers to attack anything they come in contact with. SCP-3023-A display speed, durability, and physical strength far in excess of what their structure and composition should allow. Destruction or dismemberment of the object is sufficient to cause anomalous properties to cease.</p>
                            <p>The mechanism by which SCP-3023 occurs is unclear.</p>
                            `
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A supernatural occurrence localized to a specific area in central Germany, SCP-3023 manifests by transforming inanimate objects into arachnoid, hostile entities with an unnatural strength, speed, and resilience. These creatures, known as SCP-3023-A instances, are highly aggressive and unpredictable, attacking anything in their vicinity. The entity SCP-3023-B is an ordinary man linked to this phenomenon, although he exhibits no visible abnormalities.`,
                        "Other": `<p><b>Arachnoid Transformation (SCP-3023-A Instances):</b> Objects in SCP-3023’s active area may spontaneously animate into arachnoid creatures, collectively designated SCP-3023-A. Each SCP-3023-A instance is unique, based on the original object’s shape, size, and material. When activated, an SCP-3023-A instance grows legs, pincers, or other appendages, often with capabilities that far exceed their original physical properties. SCP-3023-A instances are typically eradicated using conventional or high-power weaponry.
                                    <ul>
                                        <li><b>HP:</b> Varies by size and material (e.g., Small: 8 HP, Medium: 12 HP, Large: 20 HP).</li>
                                        <li><b>Armor:</b> 1 to 4 (based on material—soft objects like gelatin capsules have 1, metal objects have 3-4).</li>
                                        <li><b>Speed:</b> Fast (SCP-3023-A instances are surprisingly quick, especially given their size and material).</li>
                                        <li><b>Attack:</b> Piercing Pincers, D6 (small objects) to D10 (large objects) damage.</li>
                                    </ul>    
                                </p>
                            <p><b>Erratic Behavior:</b> Each SCP-3023-A instance moves and attacks erratically, often destroying anything in its path. All creatures within 10 feet of an SCP-3023-A instance must succeed on an Agility DR 12 each turn or take D4 damage as they are hit by flailing limbs or sharp pincers.</p>
                            <p><b>Enhanced Durability:</b> SCP-3023-A instances are highly resilient. Any attack against an SCP-3023-A instance suffers a -1 penalty to hit due to its unpredictable movement. When reduced to 0 HP, the object reverts to its original form and loses all anomalous properties.</p>
                            <p><b>SCP-3023-B - "The Carrier"</b> SCP-3023-B, Mr. Sauer, is a man linked to the SCP-3023 phenomenon. Despite appearing ordinary, he occasionally exhibits unintentional anomalous behavior that may trigger SCP-3023 events. While he has no direct control over this ability, being near him increases the chances of SCP-3023 manifestations.
                                    <ul>
                                        <li><b>HP:</b> 10</li>
                                        <li><b>Armor:</b> 0</li>
                                        <li><b>Morale:</b> 10 (typically cooperative but becomes distressed when an SCP-3023-A instance activates nearby)</li>
                                    </ul>
                                </p>
                            <p><b>Possession Triggers:</b> Mr. Sauer is believed to unwittingly activate SCP-3023 instances. When he is near specific objects, there is a 1-in-6 chance per hour that SCP-3023 will affect a nearby object, transforming it into an SCP-3023-A instance.</p>
                            <p><b>Anomalous Influence (Passive):</b> While SCP-3023-B is near, small objects have a slight chance of changing into arachnoid forms, even in non-active SCP-3023 regions. This effect occurs randomly and unpredictably, often when he touches or interacts with specific objects (GM discretion).</p>
                            `,
                        "Weakness": `<p>Physical destruction of SCP-3023-A instances will end their anomalous properties, causing them to revert to their original state.</p>
                                <p>SCP-3023-A instances are often eradicated using explosives or powerful strikes. Task forces deployed to combat SCP-3023-A instances may need specialized equipment.</p>`,
                    }
                }
            }
        },
        {//SCP 4666
            "id": "SCP4666",
            "name": "SCP 4666 - The Yule Man",
            "safety_class": "Keter",
            "image": "images/SCP-4666_img.webp", // .png .jpg .webp
            "info": {
                "": {
                    "containment": `Web traffic and law enforcement channels worldwide are to be monitored for evidence of SCP-4666 activity, and particularly for cases of stalking or reports of anomalous phenomena involving families with young children.
                            <p>Should a Weissnacht Event be suspected to be in progress, the nearest Containment Task Force is to be dispatched to attempt containment of SCP-4666. Standard PDP/VIII Humanoid First Contact Protocols apply.</p>
                            <p>Media coverage of family deaths attributed to SCP-4666 is to be suppressed or falsified to make said deaths appear as non-anomalous home invasion murders. Forensic evidence and SCP-4666-A instances collected by non-Foundation agencies are to be confiscated, and witnesses amnesticized.</p>
                            `,
                    "description": `SCP-4666 is currently believed to be a single, exceptionally long-lived humanoid entity of unknown origin. Survivors of Weissnacht Events typically describe SCP-4666 as a very tall (between 2 m and 2.3 m) elderly male of European descent, with an extremely emaciated appearance. The entity always appears completely naked, even when observed outdoors in freezing weather.`,
                    "additional": `<p>Though the nature and extent of its anomalous properties remain uncertain, SCP-4666 appears capable of instantaneous or near-instantaneous travel to any location north of 40°N latitude, and possibly to any location on Earth.</p>
                                <p>SCP-4666 activity occurs exclusively within a period of 12 consecutive nights every year, from the night of December 21-22 to the night of January 1-2; this period is known as SCP-4666’s “active phase”. During this phase, in what are termed "Weissnacht Events", SCP-4666 will appear at dwellings in one or multiple locations north of 40°N latitude. In all known Weissnacht Events, these dwellings have shared the following characteristics: isolated rural location, home to a family with at least one child under the age of 8, and situated in an area with snow cover lasting throughout the duration of the event.</p>
                                <p>Weissnacht Events consist of the following general progression:</p>
                                    <p><b>Nights 1-7:</b> Children will report seeing SCP-4666 in the vicinity of their family's dwelling. The entity will typically be observed watching the dwelling from a distance, such as from across a nearby field or from the edge of a neighboring forest. In some cases, children will report waking up at night to find SCP-4666 watching them sleep through a window.</p>
                                    <p><b>Nights 8-11:</b> Family members (including the parents) will report sounds of footsteps coming from the roof or the attic. An extremely unpleasant odor will also frequently be noticed inside the dwelling. No cause for these phenomena will be found. As a result, parents will often begin to suspect that their family is being stalked, or even that their dwelling might be "haunted".</p>
                                    <p><b>Night 12:</b> Over the course of the night one of two scenarios will occur:
                                        <ul>
                                            <li>The first, and most common, is that SCP-4666 will kill all members of the family save for one child under the age of 8, whom it will abduct. SCP-4666 will inflict incapacitating injuries to family members while they are sleeping, then herd them into a single room of the dwelling where it will proceed to kill them in view of each other. The method of killing varies with the event, and will typically be preceded by some form of torture, which appears to serve a ritualistic purpose.</li>
                                            <li>In the second scenario, which has occurred in roughly 15% of known Weissnacht Events, SCP-4666 will not harm the family. Family members will report hearing footsteps inside their dwelling during the night, though no signs of forced entry will be found. In the morning children will discover presents at the foot of their beds; these will consist of toys crudely crafted from the remains of human children.</li>
                                        </ul>
                                    </p>
                                <p></p>`
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": `A towering, skeletal figure with pale, frostbitten skin and eyes like burning embers. It appears exclusively during winter, stalking families in isolated rural homes with young children. The Fiend’s presence brings disturbing sights and sounds, escalating over twelve nights until it either slaughters the family or leaves disturbing “gifts” crafted from human remains.`,
                        "HP": "∞ (Unkillable)",
                        "Morale": "Immune (never retreats)",
                        "Armor": "3 (resilient, ice-bound flesh that seems impervious to decay or damage)",
                        "Speed": "Fast (moves silently and with supernatural agility)",
                        "Attack": `Frostbitten Claws – 1d10 damage, plus frostbite effect`,
                        "SpecialAbilities": `
                                <p><b>Frostbite Touch:</b> The Yule Fiend’s touch causes agonizing frostbite that bites deep into the flesh, leaving lasting damage.
                                    <ul>
                                        <li><b>Effect:</b> On a successful melee attack, the Yule Fiend deals 1d10 damage. Additionally, the target must pass a Toughness DR12 check. On a failure, they suffer frostbite, which imposes -1 to Agility rolls until magically or alchemically treated. This effect is cumulative and deepens with each attack.</li>
                                    </ul>
                                </p>
                                <p><b>Night Stalker:</b> Over twelve nights, the Yule Fiend gradually builds psychological terror within the family, escalating its presence and leaving signs of its approach.
                                    <ul>
                                        <li><b>Progression:</b>
                                            ul>
                                                <li><b>Nights 1-7:</b> The Yule Fiend watches from a distance, appearing in windows or from tree lines. Only children see it during this stage.</li>
                                                <li><b>Nights 8-11:</b> The family hears footsteps on the roof or attic, accompanied by a rancid odor. Presence DR10 to resist paranoia; failure results in -1 to Morale each night due to growing dread.</li>
                                                <li><b>Night 12:</b> The Yule Fiend enters the home. In 85% of cases, it will kill all family members except one child, whom it abducts. In 15% of cases, it leaves “gifts” crafted from remains of other children, placed at the foot of the children's beds.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                <p><b>Grisly Gifts:</b> When the Yule Fiend spares a family, it leaves behind gruesome, handmade “gifts” crafted from bones, hair, and skin of its past victims.
                                    <ul>
                                        <li><b>Effect:</b> Discovering these gifts imposes -1 to Morale. Any character who touches or keeps one suffers -1 to Presence until the item is discarded or destroyed. These “gifts” are cursed, subtly draining the life force of anyone who interacts with them.</li>
                                    </ul>
                                </p>
                                <p><b>Ritual of Terror:</b> On the 12th night, the Yule Fiend enacts a ritual that either kills or traumatizes the family.
                                    <ul>
                                        <li><b>Effect:</b>
                                            <ul>
                                                <li><b>For 85% of families:</b> The Fiend incapacitates all family members except one young child, herding them into a room where it kills them ritualistically, making each watch the others die.</li>
                                                <li><b>For 15% of families:</b> The Yule Fiend leaves without harming them but leaves grotesque SCP-4666-A gifts behind. Presence DR14 is required to resist the permanent trauma of seeing these items. Failing the roll imposes -1 to Morale permanently.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                <p><b>Unstoppable Presence:</b> TSCP-4666 cannot be killed or deterred. Any wounds inflicted upon it disappear almost instantly, and any attempt to “destroy” it results in only a temporary delay.(Only way to get rid of it is to survive the 12th night)
                                    <ul>
                                        <li><b>Regeneration:</b> Any injury or damage dealt to SCP-4666 fades within seconds, as if untouched. Attacks seem to slow it briefly but cause no lasting harm.</li>
                                        <li><b>Instantaneous Return:</b> If SCP-4666 is somehow “destroyed” or incapacitated, its body disappears and reappears nearby, resuming its stalking behavior.</li>
                                        <li><b>Intangible Terror:</b> SCP-4666 is immune to all conventional weapons, magic, or other attacks that might harm a living creature. Its immunity emphasizes its nature as a supernatural entity, a force of relentless winter death.</li>
                                    </ul>
                                </p>

                                <hr>
                                <p><b style="text-decoration: underline; font-size: x-large;">Survival Objective</b> 
                                <p>Characters encountering the Yule Fiend cannot hope to kill it; their only hope is survival. The Yule Fiend’s progression over 12 nights gives characters time to prepare, hide, or flee—if they can outwit it.
                                    <ul>
                                        <li><b>Escape:</b> The Yule Fiend can follow its prey over great distances if it marks them, making fleeing difficult. Characters who attempt to escape must be relentless in their efforts to hide any traces of their presence.</li>
                                        <li><b>Hiding:</b> Characters may try to remain hidden or make use of decoys, hoping to mislead the Yule Fiend for one night at a time. Each attempt requires a Presence DR12 to avoid detection.</li>
                                        <li><b>Evade and Survive:</b> If the characters manage to avoid or mislead the Yule Fiend for all 12 nights, it will lose interest—at least until the following winter.</li>
                                    </ul>
                                </p>

                                `
                    }
                }
            }
        },




//SCP-1230
//SCP-3930

        {//SCP base
            "id": "base",//"SCP000"
            "name": "SCP - Name",
            "safety_class": "",
            "image": "images/SCP-0_img", // .png .jpg .webp
            "info": {
                "": {
                    "containment": ``,
                    "description": ``,
                    "additional": ``
                },
                "5th Edition": {
                    "stats": {
                        "Appearance": ``,
                        "HP": 0,
                        "AC": 0,
                        "Speed": "30 ft",
                        "Strength": 0,
                        "Dexterity": 0,
                        "Constitution": 0,
                        "Intelligence": 0,
                        "Wisdom": 0,
                        "Charisma": 0,
                        "Passive":`<ul>
                                    <li><b>Senses:</b>Passive perception</li>
                                    <li><b>Languages:</b>Does not seem to be sentient.</li>
                                </ul>`,
                        "Actions":`<ul>
                                    <li><b>Name:</b><i>Type:</i>+ to hit, reach ft.<br><i>Hit:</i>dice +nr damage. 
                                </ul>`
                                }
                },
                "Fallout": {
                    "stats": {
                        "Appearance": ``,
                        "HP": 0,
                        "Stamina": 0,
                        "ArmorClass": 0,
                        "ActionPoints": 0,
                        "Strength": 0,
                        "Perception": 0,
                        "Endurance": 0,
                        "Charisma": 0,
                        "Intelligence": 0,
                        "Agility": 0,
                        "Luck": 0,
                        "Passive":`<ul>
                                    <li><b>Senses:</b>Passive sence </li>
                                    <li><b>Languages:</b>Does not seem to be sentient.</li>
                                </ul>`,
                        "Actions":`<ul>
                                    <li><b>Name:</b><i>Type:</i>+ to hit, reach ft.<br><i>Hit:</i>dice +nr damage. 
                                </ul>`
                    }
                },
                "Mork Borg": {
                    "stats": {
                        "Appearance": ``,
                        "HP": ``,
                        "Morale": ``,
                        "Armor": "",
                        "Speed": "",
                        "Attack": ``,
                        "Usage": ``,
                        "Other": ``,
                        "SpecialAbilities": `
                                <p><b>Name:</b> description</p>
                                `,
                        "Weakness": `<p><b>Name:</b> description</p>`,
                    }
                }
            }
        },


    ],

    "playable":[ 
            {//Containment Specialist
                "id": "Containment Specialist",
                "name": "Containment Specialist",
                "safety_class": "Personnel",
                "info": {
                    "5th Edition": {//Backgrounds
                        "stats": {
                            "Description": `You’re trained to handle anomalies—secure, contain, protect. However, nothing in your training could truly prepare you for the horrors you've encountered.`,
                            "SkillProficiencies:": `Investigation, Survival`,
                            "ToolProficiencies:": `Tinker's Tools`,
                            "Equipment:": `
                                <ol>
                                    <li>A containment bag (a sturdy sack with mysterious sealing properties)</li>
                                    <li>A piece of containment chalk</li>
                                    <li>A journal of notes on strange creatures</li>
                                    <li>10 gp</li>
                                </ol>`,
                            "Feature:": `<b>Protocol Knowledge</b>
                                <ol>
                                    <li>You’re familiar with procedures and tactics for containing and interacting with magical or otherworldly creatures. You can gain advantage on Investigation or Survival checks to identify weaknesses or predict the behaviors of supernatural entities.</li>
                                </ol>`,
                            "PersonalityTraits: ": `
                                <ul>
                                    <li>“I feel most alive when I’m in control of a situation, even if it’s a deadly one.”</li>
                                    <li>“I obsessively check and re-check my equipment and surroundings.”</li>
                                    <li>“I’m calm under pressure; emotions are a luxury I can’t afford.”</li>
                                    <li>“I view people like puzzles or anomalies—only by observing can I understand them.”</li>
                                </ul>`,
                            "Ideals:": `
                                <ul>
                                    <li>Order:<b></b> "Only through discipline and careful protocols can we survive." (Lawful)</li>
                                    <li><b>Knowledge:</b> "To protect others, we must first understand what we’re up against." (Neutral)</li>
                                    <li><b>Duty:</b> "I have a responsibility to contain the unknown, no matter the cost." (Lawful)</li>
                                </ul>`,
                            "Bonds:": `
                                <ul>
                                    <li>“I lost someone I cared about to an anomaly I couldn’t contain. I’ll never let that happen again.”</li>
                                    <li>“The Foundation was my life; I feel lost without its structure and purpose.”</li>
                                    <li>“My partner went missing in a containment breach. I’ll find out what happened to them.”</li>
                                </ul>`,
                            "Flaws::": `
                                <ul>
                                    <li>“I often prioritize containment over people’s lives, which makes me hard to trust.”</li>
                                    <li>“I have trouble letting go of my obsession with ‘secure, contain, protect’ and struggle to relax.”</li>
                                    <li>“I see danger in every corner, often to the point of paranoia.”</li>
                                </ul>`,
                                    }
                    },
                    "Fallout": {//Background
                        "stats": {
                            "Description": `As a former member of an organization dedicated to securing and containing dangerous anomalies, you've trained for every possible scenario, but the Wasteland presents a new set of horrors.`,
                            "Skills": `+2 to Science, Survival, and Guns`,
                            "Traits": `<b>Secure, Contain, Protect</b>
                                <ul>
                                    <li>You know how to secure dangerous items and can rig makeshift containment devices with limited resources. Once per session, you may spend a Luck Point to gain a piece of temporary containment gear that can hold or trap a creature or item briefly.</li>
                                </ul>`,
                            "Equipment": `
                                <ul>
                                    <li>x1 leather armor with lead-lining</li>
                                    <li>x1 bolt-action rifle (with two levels of decay)</li>
                                    <li>x15 .308 bullets</li>
                                    <li>x1 reinforced containment sack</li>
                                    <li>x2 purified water</li>
                                    <li>x1 healing powder</li>
                                    <li>x2 RadAway</li>
                                    <li>x1 StimPak</li>
                                    <li>x1 flashlight</li>
                                    <li>x50 caps</li>
                                </ul>
                                `,
                        }
                    },
                    "Mork Borg": {//Classes
                        "stats": {
                            "Description": `You’re trained to deal with anomalies—secure, contain, protect. But your survival depends more on instinct and improvisation than any protocol.`,
                            "HP": `Toughness + d6`,
                            "StartingMoney:": `2d6 × 10s, d3 Omens`,
                            "Background:": `(Roll a d6)
                                <ol>
                                    <li>Trained at Site-19 under Dr. █████’s guidance.</li>
                                    <li>The sole survivor of an SCP-682 containment breach.</li>
                                    <li>Recruited from military ops, “volunteered” for Foundation work.</li>
                                    <li>Used to work as a guard at a low-level containment facility.</li>
                                    <li>Failed a crucial containment mission and narrowly survived.</li>
                                    <li>Originally a researcher who proved surprisingly capable in the field.</li>
                                </ol>`,
                            "Abilities:": `
                                <ol>
                                    <li><b>Protocol Override:</b> Roll a d6 when encountering an SCP. On a 4-6, you know a specific method or protocol to safely interact with, contain, or evade it, granting advantage on checks.</li>
                                    <li><b>Emergency Backup:</b> Once per session, you can call for emergency backup, gaining a piece of containment equipment (e.g., a sedative dart, hand-held containment device, or reinforced armor).</li>
                                    <li><b>Paranoia:</b> You are always alert. Gain +1 on checks to detect danger or avoid surprise attacks.</li>
                                </ol>
                                    `,
                        }
                    }
                }
            },
            {//Disposable Class (D-Class)
                "id": "Disposable Class (D-Class)",
                "name": "Disposable Class (D-Class)",
                "safety_class": "Personnel",
                "info": {
                    "5th Edition": {//Backgrounds
                        "stats": {
                            "Description": `You were a prisoner or an outcast, plucked from the dregs of society and used as a test subject for dangerous magical experiments. Somehow, you survived, though your mind bears scars from the experience.`,
                            "SkillProficiencies:": `Stealth, Perception`,
                            "Languages:": `One additional language of your choice (perhaps one learned from other prisoners or captors).`,
                            "Equipment:": `
                                <ol>
                                    <li>Worn clothing from your previous life</li>
                                    <li>A jagged shiv</li>
                                    <li>A small faded photo of someone important</li>
                                    <li>5 gp</li>
                                </ol>`,
                            "Feature:": `<b>Survivor’s Resilience</b>
                                <ol>
                                    <li>You’ve developed an innate ability to endure harsh conditions and resist the effects of fear and horror. You have advantage on saving throws against being frightened once per long rest.</li>
                                </ol>`,
                            "PersonalityTraits: ": `
                                <ul>
                                    <li>“Trust no one; I’ve been abandoned too many times.”</li>
                                    <li>“I approach every situation with a healthy dose of cynicism.”</li>
                                    <li>“I’m quick to anger when treated as expendable or useless.”</li>
                                    <li>“I don’t dwell on the past; survival is all that matters to me now.”</li>
                                </ul>`,
                            "Ideals:": `
                                <ul>
                                    <li><b>Survival:</b> "I’ll do whatever it takes to stay alive, even if it means making hard choices." (Neutral)</li>
                                    <li><b>Self-Reliance:</b> "The only person I can truly depend on is myself." (Chaotic)</li>
                                    <li><b>Freedom:</b> "I refuse to be anyone’s pawn again." (Chaotic)</li>
                                </ul>`,
                            "Bonds:": `
                                <ul>
                                    <li>“I owe my life to a fellow prisoner who helped me escape.”</li>
                                    <li>“The scars I bear remind me of the people who treated me like an object.”</li>
                                    <li>“I have a token from a past life; it’s the only thing that keeps me grounded.”</li>
                                </ul>`,
                            "Flaws::": `
                                <ul>
                                    <li>“I tend to see others as either useful or a threat, with little room for anything in between.”</li>
                                    <li>“I’m prone to bouts of nihilism, struggling to see value in anything or anyone.”</li>
                                    <li>“I can be reckless, often taking extreme risks out of defiance or anger.”</li>
                                </ul>`,
                                    }
                    },
                    "Fallout": {//Background
                        "stats": {
                            "Description": `Drawn from society’s undesirables, you were "selected" to undergo dangerous testing for the Foundation. Through luck and wit, you survived. Now, you’re a survivor in a new world, unwilling to trust others but ready to survive against the odds.`,
                            "Skills": `+2 to Stealth, Melee Weapons, and Perception`,
                            "Traits": `<b>Scrappy Survivor</b>
                                <ul>
                                    <li>You know how to make the most of minimal resources. Once per session, you can scavenge or create a makeshift weapon with basic materials (e.g., a shiv, club, or reinforced pipe). You also gain +1 damage with improvised weapons.</li>
                                </ul>`,
                            "Equipment": `
                                <ul>
                                    <li>x1 cloth armor</li>
                                    <li>x1 shiv</li>
                                    <li>x1 pipe pistol (with three levels of decay)</li>
                                    <li>x15 9mm bullets</li>
                                    <li>x1 backpack</li>
                                    <li>x1 StimPak</li>
                                    <li>x1 diluted RadAway</li>
                                    <li>x1 purified water</li>
                                    <li>x2 dirty water</li>
                                    <li>x1 box of BlamCo Mac & Cheese</li>
                                    <li>x10 caps</li>
                                </ul>
                                `,
                        }
                    },
                    "Mork Borg": {//Classes
                        "stats": {
                            "Description": `Taken from the depths of prison or conscripted for reasons you can't remember, you're now a pawn in the Foundation's experiments. But you've survived this long, somehow.`,
                            "HP": `Toughness + d8`,
                            "StartingMoney:": `1d2 × 10s, d2 Omens`,
                            "Background:": `(Roll a d6)
                                <ol>
                                    <li>Convicted murderer, assigned for termination through "containment work."</li>
                                    <li>Former military, court-martialed for insubordination.</li>
                                    <li>Random civilian who got too close to an anomaly.</li>
                                    <li>A cultist who joined to survive, if only barely.</li>
                                    <li>Volunteer for SCP research to reduce a life sentence.</li>
                                    <li>Former SCP Foundation janitor who witnessed too much.</li>
                                </ol>`,
                            "Abilities:": `
                                <ul>
                                    <li><b>Survivor's Luck:</b> Once per session, reroll a failed check related to avoiding harm. After surviving an anomaly, gain +1 Experience.</li>
                                    <li><b>Adapt or Die:</b> You can attempt to handle anomalies or hazardous items. When using any item of unknown origin or attempting to interact with SCP artifacts, roll with advantage.</li>
                                    <li><b>Disposable Rage:</b> If wounded, you can enter a frenzied state, attacking with +1 to damage but with disadvantage on defense checks until the encounter ends.</li>
                                </ul>
                                    `,
                        }
                    }
                }
            },
            {//Foundation Cultist
                "id": "Foundation Cultist",
                "name": "Foundation Cultist",
                "safety_class": "Personnel",
                "info": {
                    "5th Edition": {//Backgrounds
                        "stats": {
                            "Description": `You were part of a rogue group that toyed with forbidden magic and summoned forces best left alone. The Foundation caught wind of you, but instead of executing you, they recruited you for your insights.`,
                            "SkillProficiencies:": `Arcana, Religion`,
                            "Languages:": `Abyssal or Infernal`,
                            "Equipment:": `
                                <ol>
                                    <li>A small strange token from your cult (e.g., an obsidian shard, a scrap of ancient parchment)</li>
                                    <li>A piece of dark, hooded clothing</li>
                                    <li>A set of common clothes</li>
                                    <li>15 gp</li>
                                </ol>`,
                            "Feature:": `<b>Dark Lore</b>
                                <ol>
                                    <li>You know obscure rituals and occult knowledge. You can identify supernatural symbols, recognize references to forbidden entities, and gain advantage on Arcana or Religion checks related to dark lore and rituals.</li>
                                </ol>`,
                            "PersonalityTraits: ": `
                                <ul>
                                    <li>“I find comfort in rituals and practices that others see as strange or disturbing.”</li>
                                    <li>“I speak in cryptic or symbolic phrases that only make sense to me.”</li>
                                    <li>“I’m drawn to the bizarre and unexplainable, almost to an unhealthy extent.”</li>
                                    <li>“I act as if I’m part of some grand, divine plan that others can’t comprehend.”</li>
                                </ul>`,
                            "Ideals:": `
                                <ul>
                                    <li><b>Faith:</b> "The anomalies are part of something greater, and I am destined to understand it." (Lawful)</li>
                                    <li><b>Knowledge:</b> "True understanding comes through exploring forbidden paths." (Neutral)</li>
                                    <li><b>Sacrifice:</b> "If I must suffer to achieve enlightenment, so be it." (Lawful)</li>
                                </ul>`,
                            "Bonds:": `
                                <ul>
                                    <li>“My cult may be scattered, but I still consider myself bound to its mission.”</li>
                                    <li>“I seek out relics of the past that might unlock deeper truths.”</li>
                                    <li>“I once had a mentor in the cult who vanished mysteriously. I hope to find them again.”</li>
                                </ul>`,
                            "Flaws::": `
                                <ul>
                                    <li>“I’m easily drawn into dangerous situations by my curiosity for the supernatural.”</li>
                                    <li>“I often view people as tools to aid in my quest for knowledge.”</li>
                                    <li>“I struggle with loyalty, especially when it conflicts with my desire for enlightenment.”</li>
                                </ul>`,
                                    }
                    },
                    "Fallout": {//Background
                        "stats": {
                            "Description": `Once part of a secretive cult that believed in forbidden knowledge and dark rituals, you were “rescued” and trained to use your skills in controlling the supernatural. Now you wander, using your arcane knowledge for your own survival.`,
                            "Skills": `+2 to Melee Weapons, Speech, and Science`,
                            "Traits": `<b>Ritual Knowledge</b>
                                <ul>
                                    <li>Your occult knowledge allows you to perform minor rituals or recognize magical symbols. Once per session, you may attempt a ritual to gain a brief vision, warning, or vague hint related to the immediate environment, consuming one Luck Point in the process.</li>
                                </ul>`,
                            "Equipment": `
                                <ul>
                                    <li>x1 cloth armor</li>
                                    <li>x1 knife</li>
                                    <li>x1 bolt-action rifle (with two levels of decay)</li>
                                    <li>x15 .308 bullets</li>
                                    <li>x1 occult talisman</li>
                                    <li>x1 diluted RadAway</li>
                                    <li>x1 purified water</li>
                                    <li>x1 Rad-X</li>
                                    <li>x50 caps</li>
                                </ul>
                                `,
                        }
                    },
                    "Mork Borg": {//Classes
                        "stats": {
                            "Description": `You’re a rogue cultist, exposed to artifacts and forbidden rituals under Foundation “guidance.” Now you use this knowledge to survive… for now.`,
                            "HP": `Toughness + d4`,
                            "StartingMoney:": `2d6 × 10s, d4 Omens`,
                            "Background:": `(Roll a d6)
                                <ol>
                                    <li>Orphaned in a Foundation ritual gone wrong.</li>
                                    <li>Initiated by rogue cultists, "rescued" by SCP operatives.</li>
                                    <li>Former librarian at Site-77's archive section.</li>
                                    <li>Trained in occult methods to contain SCP entities.</li>
                                    <li>Disillusioned researcher who defected to explore SCP secrets.</li>
                                    <li>Chosen by an SCP cult but turned against them.</li>
                                </ol>`,
                            "Abilities:": `
                                <ul>
                                    <li><b>Forbidden Knowledge:</b> You know how to use ancient rituals to ward off or bind anomalies. Roll with advantage on any attempts to seal or neutralize SCP entities.</li>
                                    <li><b>Dark Visions:</b> Once per rest, you can enter a trance and gain cryptic insight into upcoming dangers or anomalies, granting +1 on all related checks.</li>
                                    <li><b>Cult Relic:</b> Start with a small SCP artifact (DM’s discretion, e.g., a piece of “living” rock, an enchanted relic). It has unpredictable effects when activated, which might help or harm you.</li>
                                </ul>
                                    `,
                        }
                    }
                }
            },
            {//Anomalous Survivor
                "id": "Anomalous Survivor",
                "name": "Anomalous Survivor",
                "safety_class": "Personnel",
                "info": {
                    "5th Edition": {//Backgrounds
                        "stats": {
                            "Description": `Exposed to a bizarre phenomenon, you’ve been altered in ways that you’re only beginning to understand. Others may find your presence unsettling, but you've learned to live with the strange abilities that now mark you.`,
                            "SkillProficiencies:": `Arcana, Insight`,
                            "Languages:": `One additional language of your choice`,
                            "Equipment:": `
                                <ol>
                                    <li>A trinket from the anomaly that changed you (perhaps a crystal shard or a pendant that hums in moonlight)</li>
                                    <li>A set of common clothes</li>
                                    <li>A mysterious scar that never fades</li>
                                    <li>10 gp</li>
                                </ol>`,
                            "Feature:": `<b>Anomalous Aura</b>
                                <ol>
                                    <li>Your exposure to the supernatural gives you insight into the motives and emotions of other beings. You have advantage on Insight checks when interacting with creatures that are otherworldly or magical in nature, as if they recognize something familiar in you.</li>
                                </ol>`,
                            "PersonalityTraits: ": `
                                <ul>
                                    <li>“I sometimes lose track of what’s real and what isn’t due to my altered perceptions.”</li>
                                    <li>“I keep a stoic exterior, but inside, I’m haunted by what I’ve endured.”</li>
                                    <li>“I’m slow to trust, as I know firsthand how quickly things can go wrong.”</li>
                                    <li>“I often speak in hushed tones, as if afraid something is always listening.”</li>
                                </ul>`,
                            "Ideals:": `
                                <ul>
                                    <li><b>Resilience:</b> "What doesn’t kill me only makes me stronger." (Neutral)</li>
                                    <li><b>Discovery:</b> "I must understand what’s been done to me, no matter the cost." (Chaotic)</li>
                                    <li><b>Isolation:</b> "It’s better to be alone than risk hurting others." (Neutral)</li>
                                </ul>`,
                            "Bonds:": `
                                <ul>
                                    <li>“There’s someone who helped me when I was at my lowest; I owe them everything.”</li>
                                    <li>“I carry a memento from my past life, hoping it will keep me grounded.”</li>
                                    <li>“I seek answers about the anomaly that changed me, even if it’s dangerous.”</li>
                                </ul>`,
                            "Flaws::": `
                                <ul>
                                    <li>“I have trouble connecting with others, often feeling distant or cold.”</li>
                                    <li>“I’m prone to fits of paranoia, feeling that I’m always being watched or followed.”</li>
                                    <li>“My experiences have left me with a deep fear of confinement or restraint.”</li>
                                </ul>`,
                                    }
                    },
                    "Fallout": {//Background
                        "stats": {
                            "Description": `Due to exposure to unknown anomalies, you carry strange powers that set you apart. The Wasteland now fears and mistrusts you, but your knowledge may be the only thing that saves you.`,
                            "Skills": `+2 to Survival, Intimidation, and Medicine`,
                            "Traits": `<b>Mutant Insight</b>
                                <ul>
                                    <li>Your exposure to anomalies has changed you, giving you heightened senses for the strange and supernatural. Once per session, you can sense an enemy’s weak points or environmental hazards, gaining advantage on the next attack or survival check.</li>
                                </ul>`,
                            "Equipment": `
                                <ul>
                                    <li>x1 leather armor</li>
                                    <li>x1 reinforced club</li>
                                    <li>x1 pipe pistol (with three levels of decay)</li>
                                    <li>x15 9mm bullets</li>
                                    <li>x1 RadAway</li>
                                    <li>x1 diluted StimPak</li>
                                    <li>x2 healing powder</li>
                                    <li>x1 purified water</li>
                                    <li>x50 caps</li>
                                </ul>
                                `,
                        }
                    },
                    "Mork Borg": {//Classes
                        "stats": {
                            "Description": `Exposed to a strange SCP, you’re altered, for better or worse. The Foundation sees you as an asset… or a threat.`,
                            "HP": `Toughness + d6`,
                            "StartingMoney:": `1d4 × 10s, d2 Omens`,
                            "Background:": `(Roll a d6)
                                <ol>
                                    <li>Only survivor of an SCP containment breach.</li>
                                    <li>Kidnapped by a cult, returned changed.</li>
                                    <li>"Accidentally" exposed to a Foundation experiment.</li>
                                    <li>Found wandering a locked SCP containment area.</li>
                                    <li>Survivor of an incident with SCP-106.</li>
                                    <li>Spent years trapped in a liminal SCP space.</li>
                                </ol>`,
                            "Abilities:": `
                                <ul>
                                    <li><b>Anomalous Power:</b> Roll a d4 for an anomaly (e.g., limited teleportation, low-light vision, unnatural reflexes). You can use this once per rest, but roll a d6 afterward; on a 1, a negative side effect happens.</li>
                                    <li><b>Adapted to Horror:</b> You are less affected by fear. Once per session, ignore a Madness effect or automatically pass a Fear check.</li>
                                    <li><b>Residual Aura:</b> Some SCPs are drawn to you—or perhaps wary of you. Gain +1 on attempts to interact with or evade anomalous creatures.</li>
                                </ul>
                                    `,
                        }
                    }
                }
            },
            {//Field Researcher
                "id": "Field Researcher",
                "name": "Field Researcher",
                "safety_class": "Personnel",
                "info": {
                    "5th Edition": {//Backgrounds
                        "stats": {
                            "Description": `You’re an academic, investigator, or scientist whose curiosity led you down the path of studying unusual phenomena. Your background with the Foundation has taught you how to think critically and analytically about the supernatural.`,
                            "SkillProficiencies:": `Investigation, History`,
                            "ToolProficiencies:": `Alchemist's Supplies`,
                            "Equipment:": `
                                <ol>
                                    <li>A notebook with your research on supernatural phenomena</li>
                                    <li>A magnifying glass</li>
                                    <li>A small vial of ink</li>
                                    <li>A quill</li>
                                    <li>15 gp</li>
                                </ol>`,
                            "Feature:": `<b>Analytical Mind</b>
                                <ol>
                                    <li>You can quickly assess strange occurrences and supernatural events. Once per long rest, you can study a phenomenon, creature, or location for a few minutes to gain advantage on your next Investigation or Arcana check to learn more about it.</li>
                                </ol>`,
                            "PersonalityTraits: ": `
                                <ul>
                                    <li>“I’m fascinated by things that others find horrifying or dangerous.”</li>
                                    <li>“I’m meticulous, recording every detail no matter how small.”</li>
                                    <li>“I’m often distracted by my surroundings, constantly analyzing and observing.”</li>
                                    <li>“I approach situations logically, but can struggle to empathize with others.”</li>
                                </ul>`,
                            "Ideals:": `
                                <ul>
                                    <li><b>Curiosity:</b> "Knowledge is power, and there’s always more to learn." (Neutral)</li>
                                    <li><b>Protection:</b> "By understanding anomalies, we can protect others from them." (Good)</li>
                                    <li><b>Skepticism:</b> "Believing blindly is dangerous; only facts are reliable." (Lawful)</li>
                                </ul>`,
                            "Bonds:": `
                                <ul>
                                    <li>“My research is all I have, and I’d do anything to preserve it.”</li>
                                    <li>“I owe my life to a fellow researcher who saved me during a breach.”</li>
                                    <li>“I lost a mentor to an anomaly; I hope to uncover what really happened to them.”</li>
                                </ul>`,
                            "Flaws::": `
                                <ul>
                                    <li>“I have trouble abandoning research, even when it endangers myself or others.”</li>
                                    <li>“I’m dismissive of things I consider superstitious or unscientific.”</li>
                                    <li>“I sometimes put my research before my relationships, pushing people away.”</li>
                                </ul>`,
                                    }
                    },
                    "Fallout": {//Background
                        "stats": {
                            "Description": `A former scientist with the Foundation, you’ve studied countless anomalies, recording their behavior and weaknesses. The Wasteland holds many wonders, and you seek to document them before they’re lost forever.`,
                            "Skills": `+2 to Science, Perception, and Guns`,
                            "Traits": `<b>Researcher’s Eye</b>
                                <ul>
                                    <li>Your keen observation skills allow you to identify creature traits and weaknesses. Once per session, you can assess an enemy to gain insight into its strengths, vulnerabilities, or unusual abilities, granting advantage on the next relevant roll.</li>
                                </ul>`,
                            "Equipment": `
                                <ul>
                                    <li>x1 cloth armor</li>
                                    <li>x1 pipe rifle (with two levels of decay)</li>
                                    <li>x10 .308 bullets</li>
                                    <li>x1 research notebook</li>
                                    <li>x1 RadAway</li>
                                    <li>x1 diluted StimPak</li>
                                    <li>x2 purified water</li>
                                    <li>x50 caps</li>
                                </ul>
                                `,
                        }
                    },
                    "Mork Borg": {//Classes
                        "stats": {
                            "Description": `You’re not a fighter, but you’ve spent years studying anomalies, and you’ve survived enough encounters to have learned a few tricks.`,
                            "HP": `Toughness + d4`,
                            "StartingMoney:": `2d6 × 10s, d3 Omens`,
                            "Background:": `(Roll a d6)
                                <ol>
                                    <li>Researcher from the SCP-096 task force.</li>
                                    <li>Special projects director assigned to SCP-173 studies.</li>
                                    <li>Cryptozoologist once contracted by the Foundation.</li>
                                    <li>Specialist in SCP containment techniques.</li>
                                    <li>Field scientist who often escapes by the skin of their teeth.</li>
                                    <li>Low-level Foundation archivist with forbidden knowledge.</li>
                                </ol>`,
                            "Abilities:": `
                                <ul>
                                    <li><b>Anomaly Identification:</b> Roll with advantage on any attempts to analyze, recognize, or understand SCP entities.</li>
                                    <li><b>Researcher's Kit:</b> Start with a field kit containing containment tape, a flashlight, a small medkit, and a Foundation-issued notebook.</li>
                                    <li><b>Foundation Protocols:</b> Once per session, declare that you know the correct containment protocol for any SCP or anomaly, granting +1 on all checks to evade, trap, or survive it.</li>
                                </ul>
                                    `,
                        }
                    }
                }
            },
            {//Reluctant Subject (Unwilling Anomalous)
                "id": "Reluctant Subject (Unwilling Anomalous)",
                "name": "Reluctant Subject (Unwilling Anomalous)",
                "safety_class": "Personnel",
                "info": {
                    "5th Edition": {//Backgrounds
                        "stats": {
                            "Description": `Experimented on without your consent, you carry the lasting effects of those encounters. Perhaps you escaped or were set loose by your captors, and now you roam, haunted by powers you barely understand.`,
                            "SkillProficiencies:": `Intimidation, Deception`,
                            "Languages:": `One additional language of your choice`,
                            "Equipment:": `
                                <ol>
                                    <li>A set of tattered clothing</li>
                                    <li>A small pouch with strange markings</li>
                                    <li>A lucky charm that reminds you of your previous life</li>
                                    <li>5 gp</li>
                                </ol>`,
                            "Feature:": `<b>Experimental Edge</b>
                                <ol>
                                    <li>Your unique experience gives you insight into the supernatural, allowing you to sense the presence of magic or eldritch energies within 10 feet once per long rest. This effect manifests as a faint feeling or sudden headache, but it won’t reveal specific sources or precise locations.</li>
                                </ol>`,
                            "PersonalityTraits: ": `
                                <ul>
                                    <li>“I sometimes flinch at shadows or react to things others can’t see.”</li>
                                    <li>“I have a habit of concealing my hands or hiding my face, wary of being recognized.”</li>
                                    <li>“I try to blend in and avoid attention, as I’m always wary of being pursued.”</li>
                                    <li>“I distrust institutions and authority, for they see people as expendable.”</li>
                                </ul>`,
                            "Ideals:": `
                                <ul>
                                    <li><b>Freedom:</b> "No one should be used against their will; I’ll fight for my independence." (Chaotic)</li>
                                    <li><b>Survival:</b> "I’ve been through too much to let anyone else control me." (Neutral)</li>
                                    <li><b>Vengeance:</b> "Those who treated me as an object will one day pay." (Chaotic)</li>
                                </ul>`,
                            "Bonds:": `
                                <ul>
                                    <li>“I bear scars from the experimentation, and they remind me of what I’ve endured.”</li>
                                    <li>“A fellow subject didn’t make it out; I carry their memory as a warning.”</li>
                                    <li>“I long to find a place where I’ll never be hunted or experimented on again.”</li>
                                </ul>`,
                            "Flaws::": `
                                <ul>
                                    <li>“I struggle with feelings of mistrust and anger towards almost everyone.”</li>
                                    <li>“I often react aggressively when I feel threatened or cornered.”</li>
                                    <li>“I sometimes think I’m losing my grip on reality, doubting even my own memories.”</li>
                                </ul>`,
                                    }
                    },
                    "Fallout": {//Background
                        "stats": {
                            "Description": `Experimented on against your will, you were exposed to terrifying powers that left you forever altered. Now, you try to survive, haunted by powers and memories you’d rather forget.`,
                            "Skills": `+2 to Unarmed, Stealth, and Perception`,
                            "Traits": `<b>Unstable Mutation</b>
                                <ul>
                                    <li>You can use your mutation to briefly gain an advantage (e.g., heightened speed, increased strength, or night vision) once per session. Roll a d6 afterward; on a 1, the power backfires, causing temporary weakness or damage.</li>
                                </ul>`,
                            "Equipment": `
                                <ul>
                                    <li>x1 cloth armor</li>
                                    <li>x1 shiv</li>
                                    <li>x1 single-shot shotgun (with two levels of decay)</li>
                                    <li>x5 12 gauge shells</li>
                                    <li>x1 RadAway</li>
                                    <li>x2 healing powder</li>
                                    <li>x1 purified water</li>
                                    <li>x1 StimPak</li>
                                    <li>x50 caps</li>
                                </ul>
                                `,
                        }
                    },
                    "Mork Borg": {//Classes
                        "stats": {
                            "Description": `Experimented on by the Foundation, you escaped or were deemed "neutralized." You now wander, haunted by strange powers you barely understand.`,
                            "HP": `Toughness + d6`,
                            "StartingMoney:": `1d4 × 10s, d2 Omens`,
                            "Background:": `(Roll a d6)
                                <ol>
                                    <li>Used as a host for SCP-███, with lingering effects.</li>
                                    <li>"Survived" SCP-049's attention with unknown changes.</li>
                                    <li>Lab experiment in Site-██, barely escaped containment.</li>
                                    <li>Test subject for various SCP-induced psychological tests.</li>
                                    <li>Former SCP-113 test subject.</li>
                                    <li>Treated as expendable until you developed powers.</li>
                                </ol>`,
                            "Abilities:": `
                                <ul>
                                    <li><b>Unstable Anomaly:</b> Start with a d6-powered ability (e.g., temporary invisibility, phasing through walls, or bone-hard skin). Use it sparingly; afterward, roll a d4—on a 1, something goes wrong (like fatigue, nausea, or disorientation).</li>
                                    <li><b>Resistance to Madness:</b> Gain a +1 to all checks against fear, panic, or Madness.</li>
                                    <li><b>Experimental Knowledge:</b> Once per session, declare knowledge about the effects of an anomalous item or creature, making it easier to survive or escape.</li>
                                </ul>
                                    `,
                        }
                    }
                }
            },



            {//Base
                "id": "base",
                "name": "base",
                "info": {
                    "5th Edition": {//Backgrounds
                        "stats": {
                            "SkillProficiencies:": ``,
                            "ToolProficiencies:": ``,
                            "Languages:": ``,
                            "Equipment:": `
                                <ol>
                                    <li></li>
                                </ol>`,
                            "Feature:": `<b></b>
                                <ol>
                                    <li></li>
                                </ol>`,
                            "PersonalityTraits: ": `
                                <ul>
                                    <li></li>
                                </ul>`,
                            "Ideals:": `
                                <ul>
                                    <li></li>
                                </ul>`,
                            "Bonds:": `
                                <ul>
                                    <li></li>
                                </ul>`,
                            "Flaws::": `
                                <ul>
                                    <li></li>
                                </ul>`,
                                    }
                    },
                    "Fallout": {//Background
                        "stats": {
                            "Skills": ``,
                            "Traits": `<b></b>
                                <ul>
                                    <li></li>
                                </ul>`,
                            "Equipment": `
                                <ul>
                                    <li></li>
                                </ul>
                                `,
                        }
                    },
                    "Mork Borg": {//Classes
                        "stats": {
                            "HP": ``,
                            "StartingMoney:": ``,
                            "Background:": `(Roll a d6)
                                <ol>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ol>`,
                            "Abilities:": `
                                <ul>
                                    <li><b>Name:</b> description</li>
                                </ul>
                                    `,
                        }
                    }
                }
            },
    ],
};


// Function to generate the SCP or playable list dynamically based on selected format and player type
function generateSCPList() {
    const listContainer = document.getElementById('scpList');
    const formatSelector = document.getElementById("TTRPG_Format");
    const playerSelector = document.getElementById("TTRPG_player");

    // Clear any previously generated list to avoid duplicates
    listContainer.innerHTML = '';

    // Determine which list to display based on player selection
    let dataList;
    if (playerSelector.value === "scp") {
        dataList = scpData.scps;
    } else if (playerSelector.value === "playable") {
        dataList = scpData.playable;
    }

    // Check if dataList exists and is not empty
    if (!dataList) {
        console.error("Data list not found for selected player type.");
        return;
    }

    // Sort SCP list by numerical ID if displaying SCPs (not playable characters)
    if (dataList === scpData.scps) {
        dataList.sort((a, b) => {
            const idA = parseInt(a.id.replace('SCP', ''), 10);
            const idB = parseInt(b.id.replace('SCP', ''), 10);
            return idA - idB;
        });
    }

    // Loop through each item (SCP or playable character) in the selected data list
    dataList.forEach(item => {
        // Skip if id is "base" or if it's missing required data
        if (item.id === "base") return;

        const selectedFormat = formatSelector.value;

        // Check if the item has information for the selected format or is basic info
        if (item.info[selectedFormat] || selectedFormat === "") {
            const entry = document.createElement('p');
            entry.className = "clickable-text";

            // Set up the entry content with appropriate image and name
            entry.innerHTML = `<img src="${getSafetyClassImage(item.safety_class)}" class="safety_class"> ${item.name}`;
            entry.addEventListener('click', () => openPopup(item, selectedFormat));

            // Append the entry to the list container
            listContainer.appendChild(entry);
        }
    });
}

// Helper function to get safety class image based on safety class type
function getSafetyClassImage(safetyClass) {
    switch (safetyClass) {
        case 'Euclid': return 'images/Type_Euclid.png';
        case 'Keter': return 'images/Type_Keter.png';
        case 'Safe': return 'images/Type_Safe.png';
        case 'Personnel': return 'images/scp_Personnel.png';
        default: return 'images/base_triangle.png';
    }
}

// Function to open the popup with the relevant information based on the selected format
function openPopup(item, format) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popup = document.createElement('div');
    popup.className = 'popup';

    let content = '';

    // Safety class image is always shown
    let imagePath = getSafetyClassImage(item.safety_class);
    content += `<img src="${imagePath}" class="safety_class"/>`;

    // Check if the item is an SCP or a playable character
    if (item.id.startsWith("SCP")) {
        // SCP Layout with specific structure for each format
        content += `
            <div class="content">
                <img src="${item.image}" alt="${item.name} image"/>
                <h3>${item.name}</h3>
        `;

        if (format === "5th Edition" && item.info["5th Edition"]) {
            const stats = item.info["5th Edition"].stats;
            content += `
                <div>
                    ${stats.Appearance ? `<p>${stats.Appearance}</p>` : ''}
                    ${addStat("HP", stats.HP)}
                    ${addStat("AC", stats.AC)}
                    ${addStat("Speed", stats.Speed)}
                    ${addStat("Strength", stats.Strength)}
                    ${addStat("Dexterity", stats.Dexterity)}
                    ${addStat("Constitution", stats.Constitution)}
                    ${addStat("Intelligence", stats.Intelligence)}
                    ${addStat("Wisdom", stats.Wisdom)}
                    ${addStat("Charisma", stats.Charisma)}
                    <hr>
                    ${stats.Passive ? `<p>${stats.Passive}</p>` : ''}
                    <hr>
                    <a style="font-weight: bold; margin-right: 100px; text-decoration: underline;">Actions</a>
                    ${stats.Actions ? `<p>${stats.Actions}</p>` : ''}
                </div>
            `;
        } else if (format === "Fallout" && item.info["Fallout"]) {
            const stats = item.info["Fallout"].stats;
            content += `
                <div>
                    ${stats.Appearance ? `<p>${stats.Appearance}</p>` : ''}
                    ${addStat("HP", stats.HP)}
                    ${addStat("Stamina", stats.Stamina)}
                    ${addStat("Armor Class", stats.ArmorClass)}
                    ${addStat("Action Points", stats.ActionPoints)}
                    ${addStat("Strength", stats.Strength)}
                    ${addStat("Perception", stats.Perception)}
                    ${addStat("Endurance", stats.Endurance)}
                    <hr>
                    ${stats.Passive ? `<p>${stats.Passive}</p>` : ''}
                    <hr>
                    <a style="font-weight: bold; margin-right: 100px; text-decoration: underline;">Actions</a>
                    ${stats.Actions ? `<p>${stats.Actions}</p>` : ''}
                </div>
            `;
        } else if (format === "Mork Borg" && item.info["Mork Borg"]) {
            const stats = item.info["Mork Borg"].stats;
            content += `
                <div>
                    ${stats.Appearance ? `<p>${stats.Appearance}</p>` : ''}
                    ${addStat("HP", stats.HP)}
                    ${addStat("Morale", stats.Morale)}
                    ${addStat("Armor", stats.Armor)}
                    ${addStat("Speed", stats.Speed)}
                    ${stats.Attack ? `<p><b>Attack:</b> ${stats.Attack}</p>` : ''}
                    ${addStat("Usage", stats.Usage)}
                    ${stats.Other ? `<p>${stats.Other}</p>` : ''}
                    ${stats.SpecialAbilities ? `<p><h4>Special Abilities:</h4> ${stats.SpecialAbilities}</p>` : ''}
                    ${stats.Weakness ? `<p><h4>Weaknesses</h4>${stats.Weakness}</p>` : ''}
                </div>
            `;
        } else {
            const scpNumber = item.id.replace('SCP', ''); // Extract the number from the SCP ID
            const scpUrl = `https://scp-wiki.wikidot.com/scp-${scpNumber}`; // Construct the SCP Wiki URL
            content += `
                <div>
                    <p><b>Special Containment Procedures:</b><br>${item.info[""].containment}</p>
                    <p><b>Description:</b> ${item.info[""].description}</p> ${item.info[""].additional}
                </div>
                <p style="font-weight: bold; text-decoration: underline; cursor: pointer; text-align: center; font-size:larger;"><a href="${scpUrl}" target="_blank" style="color:black;">More Info</a></p>
            `;
        }
    } else {
        // Playable Character Layout (no character image, dynamic fields)
        content += `
            <div class="content">
                <h3>${item.name}</h3>
        `;

        if (format && item.info[format]) {
            const stats = item.info[format].stats;

            // Dynamically render all available stats for playable characters
            content += `<div>`;
            for (const [key, value] of Object.entries(stats)) {
                content += addStat(key.replace(":", ""), value);
            }
            content += `</div>`;
        }
    }

    content += `</div><button onclick="closePopup()">&times;</button>`;
    popup.innerHTML = content;
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) closePopup();
    });

    document.addEventListener('keydown', function handleKeydown(event) {
        if (event.key === 'Enter') {
            closePopup();
            document.removeEventListener('keydown', handleKeydown);
        }
    });
    // Hide "Back to Top" button when popup is open
    document.getElementById("backToTop").style.display = "none";
}

// Close popup function
function closePopup() {
    const overlay = document.querySelector('.overlay');
    if (overlay) overlay.remove();
    document.getElementById("backToTop").style.display = "block";
}

// Helper function to add a stat only if it's defined and not empty
function addStat(label, value) {
    return value ? `<p><b>${label}:</b> ${value}</p>` : '';
}

// Function to update the header text based on the selected format and player type
function updateHeaderText() {
    const format = document.getElementById("TTRPG_Format").value;
    const player = document.getElementById("TTRPG_player").value;
    const headerText = document.getElementById("headerText");

    if (format === "Mork Borg" && player === "playable") {
        headerText.textContent = "List of Classes:";
    } else if ((format === "5th Edition" || format === "Fallout") && player === "playable") {
        headerText.textContent = "List of Backgrounds:";
    } else {
        headerText.textContent = "List of SCP's:";
    }
}

// Function to save the selected TTRPG format in localStorage
function saveSelectedFormat() {
    const formatSelector = document.getElementById("TTRPG_Format");
    localStorage.setItem("selectedTTRPGFormat", formatSelector.value);
}

// Function to load the saved TTRPG format from localStorage
function loadSelectedFormat() {
    const savedFormat = localStorage.getItem("selectedTTRPGFormat");
    const formatSelector = document.getElementById("TTRPG_Format");

    if (savedFormat) {
        formatSelector.value = savedFormat;
        toggleFields(); // If you have logic tied to the format change, this will trigger it
    }
}

// Modified function to handle the change, save the selected format, regenerate the list, and update the header text
function toggleFields() {
    saveSelectedFormat(); // Save the selection whenever it changes

    const formatSelector = document.getElementById("TTRPG_Format");
    const playerSelector = document.getElementById("TTRPG_player");
    const playerForm = document.getElementById("playerForm");

    // Show or hide playerForm based on TTRPG_Format selection
    if (formatSelector.value === "") {
        playerForm.style.display = "none";

        // Reset TTRPG_player to "scp" if it's currently set to "playable"
        if (playerSelector.value === "playable") {
            playerSelector.value = "scp";
        }
    } else {
        playerForm.style.display = "block";
    }

    updateHeaderText(); // Update the header text based on the current selections
    generateSCPList(); // Regenerate the list based on the new format and player type
}

function scrollToTop() {
    console.log("Back to Top button clicked"); // Debug message to confirm function call
    document.body.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Event listener to load the list, saved format, and update header text when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadSelectedFormat(); // Load the saved TTRPG format on page load
    toggleFields(); // Ensure playerForm visibility, update header text, and generate list
});
