const skills = [
    {skill: 'HTML, CSS, JS', done:true},
    {skill: 'REACT', done:false},
    {skill: 'PYTHON', done:false},
    {skill: 'C++', done:false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, skill) {
    skills[id] = skill;
}

function deleteOne(id) {
    skills.splice(id, 1);
}
function create(skill) {
    skills.push(skill);
} 

function getOne(id){
    return skills[id];
}

function getAll() {
    return skills;
}