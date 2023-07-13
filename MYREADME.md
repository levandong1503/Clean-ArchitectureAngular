```mermaid
    sequenceDiagram
        participant C as Call
        participant U as UseCase
        participant UR as user.repository
        participant M as Mapper
        C->>U: call execute()
        U->>UR: call getUsers()
        UR->>M: call MapFrom()

```


1) Component get dependency `domain/usecases/...usecase`
2) `...usecase` get dependency abstract `domain/usecases/use.repository`, inherit base `usecase`
3) `data/use.implimentation-repository` use mapper , inherit `use.repository`
s 