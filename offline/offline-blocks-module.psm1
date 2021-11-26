

. .\Get-Blocks.ps1

function Get-Save {
    SaveBot @args
}

$exportModuleMemberParams = @{

	Alias = @(	
		'save'
	)

	Function = @(
        'Get-Save'
    )
}

Export-ModuleMember @exportModuleMemberParams