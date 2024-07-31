name: pipeline
on:
   push: 
     branches;
       - node 
jobs: 
    hello-word:
     runs-on: ubuntu-latest
     steps: 
     - uses: actions/setup-node@v4
       with:
         node-version: 18

      - name: hello world 
        run: node codes\index.js