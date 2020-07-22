# Node Microservice
This is a code to manage comments, the intergration with Express and Mongo DB is no implemented yet, to keep the pattern simple to understand, with this pattern change in Technology such as changing database,... should have minimum impact on the code.

![Alt text](/CleanArchitecture.png "CleanArchitecture")
reference: Bob Martin's Clean Architecture model

#The Dependency Rule
- The concentric circles represent different areas of software. In general, the further in you go, the higher level the software becomes. The outer circles are mechanisms. The inner circles are policies.
- The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. 
Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. 
That includes, functions, classes. variables, or any other named software entity.

#Entities
- Entities encapsulate Enterprise wide business rules.

#Use Cases
- The software in this layer contains application specific business rules. It encapsulates and implements all of the use cases of the system. 
- These use cases orchestrate the flow of data to and from the entities, and direct those entities to use their enterprise wide business rules to achieve the goals of the use case.
- We do not expect changes in this layer to affect the entities. We also do not expect this layer to be affected by changes to externalities such as the database, the UI, or any of the common frameworks. This layer is isolated from such concerns.
- We do, however, expect that changes to the operation of the application will affect the use-cases and therefore the software in this layer. If the details of a use-case change, then some code in this layer will certainly be affected.

#Interface Adapters
- The software in this layer is a set of adapters that convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the Database or the Web. 
- Similarly, data is converted, in this layer, from the form most convenient for entities and use cases, into the form most convenient for whatever persistence framework is being used. i.e. The Database. No code inward of this circle should know anything at all about the database. If the database is a SQL database, then all the SQL should be restricted to this layer, and in particular to the parts of this layer that have to do with the database.


#Frameworks and Drivers.
- The outermost layer is generally composed of frameworks and tools such as the Database, the Web Framework, etc. Generally you don’t write much code in this layer other than glue code that communicates to the next circle inwards.
- This layer is where all the details go. The Web is a detail. The database is a detail. We keep these things on the outside where they can do little harm.

On Terminal:
`npm run start`


