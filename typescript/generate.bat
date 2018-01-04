call npm install -g typescript
call tsc types.ts 
call tsc interfaces.ts 
call tsc classes.ts 
call tsc inheritance.ts
cd modules
call tsc util.ts timesTwo.ts --out utils.js
cd..
cd grunt-sample
call npm install
call npm install grunt-cli -g
call grunt
cd..