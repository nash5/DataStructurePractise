function perfectTeam(skills) {
    
    let unique = new Set(skills);
    
    if([...unique].sort().join('') !== 'bcmpz') {
        return 0;
    }
    
    let counter = {};
    
    [...skills].forEach(v => {
        counter[v] ? counter[v]++ : counter[v] = 1;
    });
    
    return Object.values(counter).sort((a,b) => a-b)[0];  
}