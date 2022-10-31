const unrelatedSkills = {
  interpersonal: {
    leadership: {
      icon: "",
      title: "Leadership",
    },
		strategicPlanning : {icon: "", title: "",},
		teamwork : {icon: "", title: "",},
		publicSpeaking : {icon: "", title: "",},
		communication : {icon: "", title: "",},
		teamLeadership : {icon: "", title: "",},
		decisionMaking : {icon: "", title: "",},
		problemResolution : {icon: "", title: "",},
		relationshipBuilding : {icon: "", title: "",},
		complexProblemSolving : {icon: "", title: "",},
  },
	industryKnowledge :{
		communityOutreach : {icon: "", title: "",},
		clientRelationships : {icon: "", title: "",},
		customerRelations : {icon: "", title: "",},
		publicRelations : {icon: "", title: "",},
		microControllers : {icon: "", title: "",},
		electricalEngineering : {icon: "", title: "",},
		agile : {icon: "", title: "",},
		qualityAssurance : {icon: "", title: "",},
		customerService : {icon: "", title: "",},
		processImprovement : {icon: "", title: "",},
		designSpecifications : {icon: "", title: "",},
	}
};
const tech = new Map ([
	['googleCloudPlatform',{icon: "", title: "Google Cloud Platform",}],
	['visualStudio',{icon: "", title: "Visual Studio",}],
	['azure',{icon: "", title: "Azure",}],
	['unity',{icon: "", title: "Unity",}],
	['git',{icon:"", title: "Git"}],
	['linux',{icon: "", title: "Linux",}],
	['Web3',{icon: "", title: "Web3",}],
	['jenkins',{icon: "", title: "Jenkins",}],
	['python',{icon: "", title: "Python",}],
	['verilog',{icon: "", title: "Verilog",}],
] )

const languages = new Map([
	['cpp',{icon: "", title: "C++",}],
	['cSharp',{icon: "", title: "C#",}],
	['java',{icon: "", title: "Java",}],
	['javascript',{icon: "", title: "Javascript",}],
	['html',{icon: "", title: "HTML",}],
	['matlab',{icon: "", title: "Matlab",}],
	['python',{icon: "", title: "Python",}],
	['verilog',{icon: "", title: "Verilog",}],
	['css',{icon: "", title: "CSS",}],
	['sql',{icon: "", title: "MySQL",}],
	['mongoDb',{icon: "", title: "MongoDb",}],
] )

const frontendTools = new Map ([
	['react',{icon: "", title: "React",}],
	['chai',{icon: "", title: "Chai",}],
	['figma',{icon: "", title: "Figma",}],
	['handlebars',{icon: "", title: "Handlebars",}],
	['css',{icon: "", title: "CSS",}],
] )

const backendTools = new Map([
	['nodeJs',{icon: "", title: "NodeJs",}],
	['express',{icon: "", title: "Express",}],
	['graphQl',{icon: "", title: "GraphQl",}],
	['elasticSearch',{icon: "", title: "Elastic Search",}],
	['sql',{icon: "", title: "MySQL",}],
	['mongoDb',{icon: "", title: "MongoDb",}],
	['postgres',{icon: "", title: "Postgres",}],
] )

const skills = [
	['Languages', languages],
	['Frontend Tools', frontendTools],
	['Backend Tools', backendTools],
	['Technologies', tech],
]

const professionalExperience = [
	'Leverege',
	'PACCAR',
	'Digital Future Lab',
]

const projects = [
	'Project Mindalae',
	'Capstone Project',
	'Final Bootcamp Project',
	'Battle Brands',
	'Games For You',
	'Pheeni',
	'CUAR',
	'Crows',
	'Holodome',
	'E-Nable',
]

export {
	skills,
	professionalExperience,
	projects
}