const scpData = {
    "scps": [
        {//SCP 096
            "id": "SCP096",
            "name": "SCP 096 - Shy Guy",
            "safety_class": "Euclid",
            "image": "images/SCP_096_img.png", // Static image for this SCP
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
                            `
                    }
                }
            }
        },
        {//SCP 131
            "id": "SCP131",
            "name": "SCP 131 - The Eye pods",
            "safety_class": "Safe",
            "image": "images/.png", // Static image for this SCP
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
                        "HP": 3,
                        "Morale": "12 (the Eye Pods are fearless when protecting or following their allies)",
                        "Armor": "0 (they are small and fragile)",
                        "Speed": "Fast (they dart around quickly)",
                        "Attack": "--",
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
                                `
                    }
                }
            }
        },
        {//SCP 936
            "id": "SCP936",
            "name": "SCP 936 - With many voices",
            "safety_class": "Keter",
            "image": "images/SCP_939_img.jpg", // Static image for this SCP
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
                               `
                    }
                }
            }
        },
        {//SCP 999
            "id": "SCP999",
            "name": "SCP 999 - Tickle Monster",
            "safety_class": "Safe",
            "image": "images/SCP_999_img.jpg", // Static image for this SCP
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
                                <p><b>Heroic Sacrifice:</b> description</p>
                                <p><b>Name:</b> (One-Time Use): SCP-999 will risk itself to protect others. In moments of extreme danger, it may choose to throw itself in front of an attack meant for someone else. It absorbs the blow entirely, then melts into a small, warm puddle that evaporates with a lingering scent of comfort. This action removes SCP-999 from the game, leaving only its warm memory.</p>
                               `
                    }
                }
            }
        },
        {//SCP 2316
            "id": "SCP2316",
            "name": "SCP 2316 - Bodies in the water",
            "safety_class": "Keter",
            "image": "images/SCP_2316_img.jpg", // Static image for this SCP
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
                    "SpecialAbilities": `
                            <p><b>You Do Not Recognize the Bodies in the Water:</b> When characters approach the lake, they begin to see bodies in the water that look eerily familiar—friends, family, or companions lost along the journey. Each character must make a Presence DR14. On a failure, they believe they recognize the bodies and hear a voice calling for help, begging them to come closer. Characters who fail this check are drawn closer to the lake, losing control over their actions and risking submersion.</p>
                            <p><b>Compulsion to Enter:</b> Characters who have failed the Presence check must make a Toughness DR12 each round to resist entering the water. On a failure, they move closer to the lake, walking into the water until they are submerged. Once submerged, they are considered lost unless rescued by other players or by some miraculous intervention. Characters who disappear beneath the lake are not seen again.</p>
                            <p><b>Cognitohazardous Whisper:</b> While within sight of the lake, all characters periodically hear faint, familiar voices urging them to look closer, to see who is in the water. This voice only affects those who are already under psychological stress (e.g., at low HP or suffering a curse or mental affliction). Affected characters must succeed on a Presence DR12 or become paralyzed with fascination, staring at the bodies and ignoring their surroundings until the spell is broken.</p>
                            <p><b>Hallucinations of the Drowned:</b> Characters who look directly at the bodies in the lake for more than one round must succeed on a Toughness DR16. On a failure, they suffer a temporary loss of identity and believe they belong in the lake with the bodies, abandoning their purpose and feeling an overwhelming desire to join the drowned. This effect lasts until they are forcibly removed from the lakeside or something shocks them out of the trance (such as taking damage or witnessing a holy symbol).</p>
                            <p><b>Reflection of Lost Memories:</b> If a character has experienced a traumatic or deeply sorrowful event, they will see this event reflected in the lake’s surface. Characters experiencing this must succeed on a Presence DR14 or be overcome by grief and despair, suffering -1 to all rolls for the rest of the day as the lake dredges up their painful memories.</p>
                            <p><b>Lure of Familiar Faces:</b> The lake can sense characters’ past relationships and lost loved ones, creating illusions of familiar faces and voices. Each character must succeed on a Presence DR12 every time they approach the lake; on a failure, they see a loved one among the bodies, causing them to hesitate or call out to the figures. Each failed check brings the character closer to the lake’s edge, where they risk falling under the spell of the Compulsion to Enter.</p>
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
                    "containment": "",
                    "description": "",
                    "additional": ``
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
                        "SpecialAbilities": `
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
                                <div style="margin-top: 1%; margin-right: 1%;"><b>Special Abilities</b>
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

        {//SCP base
            "id": "SCP",
            "name": "SCP - Name",
            "safety_class": "",
            "image": "images/.png", // Static image for this SCP
            "info": {
                "": {
                    "containment": "",
                    "description": "",
                    "additional": ``
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
                        "HP": 0,
                        "Morale": 0,
                        "Armor": "",
                        "Speed": "",
                        "Attack": "",
                        "SpecialAbilities": `
                                <p><b>Name:</b> description</p>
                                `
                    }
                }
            }
        },
    ]
};

// Function to generate the SCP list dynamically based on selected format
function generateSCPList() {
    const scpListContainer = document.getElementById('scpList');
    const formatSelector = document.getElementById("TTRPG_Format");

    // Clear any previously generated list to avoid duplicates
    scpListContainer.innerHTML = '';

    // Loop through each SCP and only display those with matching format data
    scpData.scps.forEach(scp => {
        const selectedFormat = formatSelector.value;

        // Check if the SCP has information for the selected format
        if (scp.info[selectedFormat] || selectedFormat === "") {
            const scpEntry = document.createElement('p');
            scpEntry.id = `openPopupText_${scp.id}`;
            scpEntry.className = "clickable-text";

            // Determine safety class image
            let imagePath;
            switch (scp.safety_class) {
                case 'Euclid': imagePath = 'images/Type_Euclid.png'; break;
                case 'Keter': imagePath = 'images/Type_Keter.png'; break;
                case 'Safe': imagePath = 'images/Type_Safe.png'; break;
                default: imagePath = 'images/base_triangle.png';
            }

            // Set up the entry content and click event
            scpEntry.innerHTML = `<img src="${imagePath}" class="safety_class"> ${scp.name}`;
            scpEntry.addEventListener('click', () => openPopup(scp, selectedFormat));

            // Append the SCP entry to the list container
            scpListContainer.appendChild(scpEntry);
        }
    });
}

// Helper function to add a stat only if it's defined and not empty
function addStat(label, value) {
    return value ? `<p><b>${label}:</b> ${value}</p>` : '';
}

// Function to open the popup with the relevant SCP information based on the selected format
function openPopup(scp, format) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popup = document.createElement('div');
    popup.className = 'popup';

    let imagePath;
    switch (scp.safety_class) {
        case 'Euclid': imagePath = 'images/Type_Euclid.png'; break;
        case 'Keter': imagePath = 'images/Type_Keter.png'; break;
        case 'Safe': imagePath = 'images/Type_Safe.png'; break;
        default: imagePath = 'images/base_triangle.png';
    }

    let content = `
        <img src="${imagePath}" class="safety_class"/>
        <div class="content">
            <img src="${scp.image}" alt="${scp.name} image"/>
            <h3>${scp.name}</h3>
    `;

    if (format === "5th Edition" && scp.info["5th Edition"]) {
        const stats = scp.info["5th Edition"].stats;
        content += `
            <div>
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
            </div>`;
    } else if (format === "Fallout" && scp.info["Fallout"]) {
        const stats = scp.info["Fallout"].stats;
        content += `
            <div>
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
            </div>`;
    } else if (format === "Mork Borg" && scp.info["Mork Borg"]) {
        const stats = scp.info["Mork Borg"].stats;
        content += `
            <div>
                ${addStat("HP", stats.HP)}
                ${addStat("Morale", stats.Morale)}
                ${addStat("Armor", stats.Armor)}
                ${addStat("Speed", stats.Speed)}
                ${addStat("Attack", stats.Attack)}
                <hr>
                ${stats.SpecialAbilities ? `<p><h4>Special Abilities:</h4> ${stats.SpecialAbilities}</p>` : ''}
            </div>`;
    } else {
        content += `
            <div>
                <p><b>Special Containment Procedures:</b><br>${scp.info[""].containment}</p>
                <p><b>Description:</b> ${scp.info[""].description}</p> ${scp.info[""].additional}
            </div>`;
    }

    content += `</div> <button onclick="closePopup()">&times;</button>`;
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
}

// Close popup function
function closePopup() {
    const overlay = document.querySelector('.overlay');
    if (overlay) overlay.remove();
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

// Modified function to handle the change, save the selected format, and regenerate the list
function toggleFields() {
    saveSelectedFormat(); // Save the selection whenever it changes
    generateSCPList(); // Regenerate the list based on the new format
}

// Event listener to load the SCP list and the saved format when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadSelectedFormat(); // Load the saved TTRPG format on page load
    generateSCPList(); // Generate the list based on the initially loaded format
});